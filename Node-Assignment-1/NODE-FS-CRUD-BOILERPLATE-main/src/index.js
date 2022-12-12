const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont change function name
	
	try{
		const writeFile = await fs.writeFile(fileName,fileContent,'utf-8')
		console.log('writeFile')
	}catch(err){
		console.log('err')
	}

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{ const readFile = await fs.readFile(fileName,'utf-8')
	// console.log('readFile')
	console.log(readFile)
	}catch(err){
		console.log('err')
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		const fileUpdate = await fs.appendFile(fileName, fileContent, 'utf-8')
		console.log('fileUpdate')
		
	}catch(err){
		console.log('err')
	}
	
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const fileDelete = await fs.unlink(fileName)
		console.log('fileDelete')
	}catch(err){
    console.log('err')
	}
	

}

myFileWriter('demo.txt', 'This my new created file')
myFileReader('demo.txt')
myFileUpdater('demo.txt', `\n hello i am new content' '\n one more'`)
myFileDeleter('demo.txt')
// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }