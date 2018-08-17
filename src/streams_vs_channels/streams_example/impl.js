goog.provide('streams_vs_channels.streams_example.impl')

streams_vs_channels.streams_example.impl = {
  newStreamExample () {
    const EventEmitter = require('events')
    const fs = require('fs')
    const EndProcessingEventEmitter = new EventEmitter()

    let fizz = []
    let buzz = []
    let fizzbuzz = []

    let fizzGroup = 1
    let buzzGroup = 1
    let fizzbuzzGroup = 1

    let fizzCounter = 0
    let buzzCounter= 0
    let fizzbuzzCounter= 0
    let othersCounter = 0

    let writeOptions = { encoding: 'utf-8' }
    let fizzStream = fs.createWriteStream('fizz.file', writeOptions)
    let buzzStream = fs.createWriteStream('buzz.file', writeOptions)
    let fizzbuzzStream = fs.createWriteStream('fizzbuzz.file', writeOptions)
    let othersStream = fs.createWriteStream('others.file', writeOptions)

    function putEndString (stream, counter, name) {
      stream.write(`\n\nThere was ${counter} numbers processed for stream ${name}\n`)
    }

    function closeStreams () {
      fizzStream.end()
      buzzStream.end()
      fizzbuzzStream.end()
      othersStream.end()
    }

    function onData (chunk) {
      let num = parseInt(chunk)

      if (num % 15 === 0) {
        ++fizzbuzzCounter
        if (fizzbuzz.length < 15) {
          fizzbuzz.push(num)
          return
        }

        fizzbuzzStream.write(`Group ${fizzbuzzGroup}: '(${fizzbuzz})\n`)
        fizzbuzz = [num]
        ++fizzbuzzGroup
      } else if (num % 5 === 0) {
        ++buzzCounter
        if (buzz.length < 5) {
          buzz.push(num)
          return
        }

        buzzStream.write(`Group ${buzzGroup}: '(${buzz})\n`)
        buzz = [num]
        ++buzzGroup
      } else if (num % 3 === 0) {
        ++fizzCounter

        if (fizz.length < 3) {
          fizz.push(num)
          return
        }

        fizzStream.write(`Group ${fizzGroup}: '(${fizz})\n`)
        fizz = [num]
        ++fizzGroup
      } else {
        ++othersCounter

        othersStream.write(`${num} `)
      }
    }

    function onEnd () {
      if (fizz.length) {
        fizzStream.write(`Group ${fizzGroup}: '(${fizz})\n`)
      }

      if (buzz.length) {
        buzzStream.write(`Group ${buzzGroup}: '(${buzz})\n`)
      }

      if (fizzbuzz.length) {
        fizzbuzzStream.write(`Group ${fizzbuzzGroup}: '(${fizzbuzz})\n`)
      }

      putEndString(fizzStream, fizzCounter, 'fizz')
      putEndString(buzzStream, buzzCounter, 'buzz')
      putEndString(fizzbuzzStream, fizzbuzzCounter, 'fizzbuzz')
      putEndString(othersStream, othersCounter, 'others')

      closeStreams()

      EndProcessingEventEmitter.emit('EndProcessing')
    }

    return {
      EndProcessingEventEmitter,
      onData,
      onEnd
    }
  }
}
