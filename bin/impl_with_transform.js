const { Transform } = require('stream')

goog.provide('streams_vs_channels.streams_example.impl_with_transform')

streams_vs_channels.streams_example.impl_with_transform = {
  othersSplitTransformer (out) {
    const state = {
      count: 0
    }

    const transformer = new Transform({
      transform(chunk, encoding, cb) {
        chunk = parseInt(chunk)
        ++state.count

        out.write(`${chunk} `)
        cb()
      }
    })

    return {
      state,
      transformer,
      out
    }
  },

  splitTransformer (out, quantity) {
    const state = {
      group: [],
      groupCount: 1,
      count: 0
    }

    const transformer = new Transform({
      transform(chunk, encoding, cb) {
        chunk = parseInt(chunk)
        ++state.count

        if (state.group.length < quantity) {
          state.group.push(chunk)

          return cb()
        }

        out.write(`Group ${state.groupCount}: ${state.group}\n`)
        state.group = [chunk]
        ++state.groupCount
        cb()
      }
    })

    return {
      transformer,
      state,
      out
    }
  },

  newStreamExample (fizzTransformer, buzzTransformer, fizzbuzzTransformer, othersTransformer) {
    const EventEmitter = require('events')
    const EndProcessingEventEmitter = new EventEmitter()

    function onData (num) {
      if (num % 15 === 0) {
        fizzbuzzTransformer.transformer.write(num)
      } else if (num % 5 === 0) {
        buzzTransformer.transformer.write(num)
      } else if (num % 3 === 0) {
        fizzTransformer.transformer.write(num)
      } else {
        othersTransformer.transformer.write(num)
      }
    }

    function onEnd () {
      if (fizzTransformer.state.group.length) {
        fizzTransformer.out.write(`Group ${fizzTransformer.state.groupCount}: ${fizzTransformer.state.group}\n`)
      }
      fizzTransformer.out.write(`There was ${fizzTransformer.state.count} numbers processed for stream fizz`)

      if (buzzTransformer.state.group.length) {
        buzzTransformer.out.write(`Group ${buzzTransformer.state.groupCount}: ${buzzTransformer.state.group}\n`)
      }
      buzzTransformer.out.write(`There was ${buzzTransformer.state.count} numbers processed for stream buzz`)

      if (fizzbuzzTransformer.state.group.length) {
        fizzbuzzTransformer.out.write(`Group ${fizzbuzzTransformer.state.groupCount}: ${fizzbuzzTransformer.state.group}\n`)
      }
      fizzbuzzTransformer.out.write(`There was ${fizzbuzzTransformer.state.count} numbers processed for stream fizzbuzz`)

      othersTransformer.out.write(`\n\nThere was ${othersTransformer.state.count} numbers processed for stream others`)

      // In real example the event should be emitted only when all streams ends writing.
      // Therefore some state would also be necessary
      EndProcessingEventEmitter.emit('EndProcessing')
    }

    return {
      EndProcessingEventEmitter,
      onData,
      onEnd
    }
  }
}
