*Our assignment was to improve the performance of the bootstrap website*
These stats are plain before any changes wore made on a connection
2g regular

---------------------------------------------------------------------------
0/18 requests | 0B / 1.2MB transferred | Finish 42.30s | DOMcontentLoaded 19.52s | Load 42.31s
---------------------------------------------------------------------------

*After compressing the images and converting them to webp's the stats rapidly improved*

-------------------------------------------------------------------------
0/18 requests | 0B / 718KB transferred | Finish 23.78s | DOMcontentLoaded 19.08s | Load 23.80s

-------------------------------------------------------------------------

*After Gzippin the files I got the following stats*

-------------------------------------------------------------------------
0/18 requests | 0B / 423KB transferred | Finish 14.50s | DOMcontentLoaded 5.62s | Load 14.52s

-------------------------------------------------------------------------

*After removed my font-family file and loading them via javascript my time improved again I also placed the script tag in the tale instead of the head*

-------------------------------------------------------------------------
0/16 requests | 0B / 253KB transferred | Finish 9.13s | DOMcontentLoaded 6.09s | Load 9.14s

-------------------------------------------------------------------------

*Here I minified my JS files*

-------------------------------------------------------------------------
0/16 requests | 0B / 249KB transferred | Finish 8.99s | DOMcontentLoaded 6.09s | Load 9.00s

-------------------------------------------------------------------------

*Here I modified my styles again*

-------------------------------------------------------------------------
0/16 requests | 0B / 231KB transferred | Finish 8.36s | DOMcontentLoaded 5.93s | Load 8.37s

-------------------------------------------------------------------------
Here are some actual screenshots of the stats before, during process and after!

<img width="932" alt="a" src="https://cloud.githubusercontent.com/assets/11157347/24035170/d15af92e-0af4-11e7-9e18-a7df12a89a79.png">
<img width="1068" alt="b" src="https://cloud.githubusercontent.com/assets/11157347/24035174/d15f0208-0af4-11e7-87f2-c37436ad2819.png">
<img width="1007" alt="c" src="https://cloud.githubusercontent.com/assets/11157347/24035171/d15d2b86-0af4-11e7-93d3-573717bfb6bf.png">
<img width="824" alt="d" src="https://cloud.githubusercontent.com/assets/11157347/24035172/d15e1e38-0af4-11e7-9505-26c0ef75aa70.png">
<img width="944" alt="e" src="https://cloud.githubusercontent.com/assets/11157347/24035173/d15e86e8-0af4-11e7-98c0-1facfa6af5f5.png">
<img width="1076" alt="f" src="https://cloud.githubusercontent.com/assets/11157347/24035175/d16106ac-0af4-11e7-8361-7a2155c39929.png">
<img width="1063" alt="g" src="https://cloud.githubusercontent.com/assets/11157347/24035176/d16fec3a-0af4-11e7-8394-91eb45285515.png">
<img width="555" alt="h" src="https://cloud.githubusercontent.com/assets/11157347/24035178/d173d87c-0af4-11e7-9026-a6f697db37c3.png">
<img width="380" alt="i" src="https://cloud.githubusercontent.com/assets/11157347/24035179/d1751e58-0af4-11e7-92f2-da67cfc28b2d.png">
<img width="389" alt="j" src="https://cloud.githubusercontent.com/assets/11157347/24035177/d173b338-0af4-11e7-8f73-dc147d8a946d.png">
