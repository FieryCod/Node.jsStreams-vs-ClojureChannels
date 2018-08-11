
goog.provide('streams_vs_channels.streams_example.impl')


streams_vs_channels.streams_example.impl = {
  newStreamExample () {
    const EventEmitter = require('events')
    const fs = require('fs')
    const EndProcessingEventEmitter = new EventEmitter()

    let fizz = []
    let buzz = []
    let fizzbuzz = []

    let fizz_group = 1
    let buzz_group = 1
    let fizzbuzz_group = 1

    let fizz_counter = 0
    let buzz_counter = 0
    let fizzbuzz_counter = 0
    let others_counter = 0

    let writeOptions = { encoding: 'utf-8' }
    let fizz_stream = fs.createWriteStream('fizz.file', writeOptions)
    let buzz_stream = fs.createWriteStream('buzz.file', writeOptions)
    let fizzbuzz_stream = fs.createWriteStream('fizzbuzz.file', writeOptions)
    let others_stream = fs.createWriteStream('others.file', writeOptions)

    function putEndString (stream, counter, name) {
      stream.write(`\n\nThere was ${counter} numbers processed for stream ${name}\n`)
    }

    function closeStreams () {
      fizz_stream.end()
      buzz_stream.end()
      fizzbuzz_stream.end()
      others_stream.end()
    }

    function onData (chunk) {
      let num = parseInt(chunk)

      if (num % 15 === 0) {
        ++fizzbuzz_counter

        if (fizzbuzz.length < 15) {
          fizzbuzz.push(num)
          return
        }

        fizzbuzz_stream.write(`Group ${fizzbuzz_group}: '(${fizzbuzz})\n`)
        fizzbuzz = [num]
        ++fizzbuzz_group
      } else if (num % 5 === 0) {
        ++buzz_counter

        if (buzz.length < 5) {
          buzz.push(num)
          return
        }

        buzz_stream.write(`Group ${buzz_group}: '(${buzz})\n`)
        buzz = [num]
        ++buzz_group
      } else if (num % 3 === 0) {
        ++fizz_counter

        if (fizz.length < 3) {
          fizz.push(num)
          return
        }

        fizz_stream.write(`Group ${fizz_group}: '(${fizz})\n`)
        fizz = [num]
        ++fizz_group
      } else {
        ++others_counter

        others_stream.write(`${num} `)
      }
    }

    function onEnd () {
      if (fizz.length) {
        fizz_stream.write(`Group ${fizz_group}: '(${fizz})\n`)
      }

      if (buzz.length) {
        buzz_stream.write(`Group ${buzz_group}: '(${buzz})\n`)
      }

      if (fizzbuzz.length) {
        fizzbuzz_stream.write(`Group ${fizzbuzz_group}: '(${fizzbuzz})\n`)
      }

      putEndString(fizz_stream, fizz_counter, 'fizz')
      putEndString(buzz_stream, buzz_counter, 'buzz')
      putEndString(fizzbuzz_stream, fizzbuzz_counter, 'fizzbuzz')
      putEndString(others_stream, others_counter, 'others')

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
