# Node.js Streams vs Golang/Clojure Channels

- [Intro](#org372ec54)
- [Development & PR's](#orgbe08ee5)
- [Task](#org0a43089)
- [Benchmark](#org22f1157)
- [Memory usage](#org37133312)
---

<a id="org372ec54"></a>

## Intro

Here you can find the comparision between channels and streams. I will focus on provide pros & cons of both and rationale why do I think certain option wins.

_Now the compiled version of a program is available in `/bin` directory. Run `node bin/exec.js` to check it out :) :rocket: :tada: :rocket:_


<a id="orgbe08ee5"></a>

## Development & PR's

1.  Install the [Leiningen](https://leiningen.org/) via brew:

    ```
    brew install leiningen
    ```

2.  Install [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) via brew or npm:

    ```
    brew install yarn
    ```

3.  Install all dependencies:

    ```
    yarn && lein deps
    ```

4.  Compile Cljs files (You can modify the `settings.cljs` to increase the number of iterations):

    ```
    lein cljsbuild once prod
    ```

    It might take a while :rocket:
5.  Run `yarn prod` to get possible options :tada: :tada: :tada:


<a id="org0a43089"></a>

## Task

The task is to take all numbers from the `seeds.file` and process it as follows.

1.  *Split (according to fizz-buzz problem) the dataset to four datasets and store the count of each:* (Task #1)
    -   fizz-numbers &#x2013; A
    -   buzz-numbers &#x2013; B
    -   fizzbuzz-numbers &#x2013; C
    -   other numbers &#x2013; D

2.  *Then these four datasets should be processed with the lowest possible memory allocation:* (Task #2)
   
    <center>

    | Dataset | Processing formula                                          |
    |---------|-------------------------------------------------------------|
    | A       | Group per 3 numbers e.g '(3 6 9) -> A1                      |
    | B       | Group per 5 numbers e.g '(5 10 15 20 25) -> B1              |
    | C       | Group per 15 numbers e.g '(15 30 45 60 75 90&#x2026;) -> C1 |
    | D       | Do not group                                                |
  
    </center>

3.  *For each A1, B1, C1 process group one by one and for each create a string* `Group x: ${GroupContent}`.
*The new datasets should consist of those strings:* (Task #3)

    <center>

    | Dataset | Processing formula                                 |
    |---------|----------------------------------------------------|
    | A1      | "Group 1: '(3 6 9)\n", "Group 2: '(9 12 18)" -> A2 |
    | B1      | Same as above -> B2                                |
    | C1      | Same as above -> C2                                |
    | D1      | As you can see that dataset is not processed -> D1 |

    </center>
4.  *Create 4 files for dataset and do the following:* (Task #4)
    -   Inject all strings for each datasets from (Task #3)
    -   For ending string inject `There was ${CountCounter} numbers processed for stream ${stream_name}`
    -   Print to the console how long the program took


<a id="org22f1157"></a>

## Benchmark

I've run each option 10 times for 1 000 000 numbers and here are the results:
<center>

| Streams (ms) | Channels (ms) |
|--------------|---------------|
| 26605.116539 |  28164.848514 |
| 25203.411413 |  27396.837127 |
| 24620.778972 |  27092.127704 |
| 24807.708090 |  27081.614445 |
| 24309.594895 |  26725.460214 |
| 24692.114949 |  26583.327855 |
| 24727.354629 |  26437.005529 |
| 25258.414988 |  26623.881638 |
| 24900.780390 |  26476.086182 |
| 25318.520212 |  26557.018727 |

</center>

*Whole program took:*

<p align="center">

|  Streams (ms) | Channels (ms) |
|---------------|---------------|
| 250451.349866 | 269150.369399 |

</p>

Channels are about 20 sec slower in the benchmark than Streams (about 2-3 seconds slower in each execution compared to streams).

<a id="org37133312"></a>

## Memory Usage

Memory usage changes in each execution. Sometimes the Channels example allocates 10mb more than Streams sometimes only 4mb more.

<center>

Channels

![Channels memory usage]()
</center>
