# cpp_loadFbx
loading fbx file via cpp

## how i made it

first of all i found
https://github.com/jskorepa/fbx

I had to change it a litle bit (i couldnt make an array of non constant length)
so i changed for example

`uint8_t compressedBuffer[compressedLength];` to `uint8_t* compressedBuffer = new uint8_t[compressedLength];`

and at the end of the function i've added `delete[]compressedBuffer;`


---
then I  included zlib via vspkg

tutorial:

https://www.youtube.com/watch?v=wRnjahwxZ8A


