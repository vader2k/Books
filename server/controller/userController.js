import Book from '../model/books.js'


export const getAllBooks = async (req, res) => {
   try {
    const books = await Book.find({})
    return res.status(200).json({success:true, data:books})
   } catch (error) {
    return res.status(400).json({success:false, message:error.message})
   }
}

export const getSingleBook = async (req, res) => {   
    const id = req.params.id
    try {
      const book = await Book.findById(id)
      return res.status(200).json({success: true, data:book})
    } catch (error) {
        return res.status(400).json({success:false, message:error.message})
    }
}

export const addBook = async (req, res) => {
    const book = new Book(req.body)
    try {
        await book.save()
        return res.status(200).json({success:true, message: "book added successfully"})
    } catch (error) {
        return res.status(400).json({success:false, message:error.message})
    }
}

export const deleteBook = async (req, res) => {
    const book = req.params.id
    try {
        await Book.findByIdAndDelete(book)
        return res.status(200).json({success:true, message:"Book deleted successfully"})
    } catch (error) {
        return res.status(400).json({success:false, message:error.message})
    }
}

export const updateBook = async (req, res) => {
    const book = req.params.id
    const query = req.body
    try {
        await Book.findByIdAndUpdate(book, query, {new:true})
        return res.status(200).json({success:true, message:"Book updated successfully"})
    } catch (error) {
        return res.status(400).json({success:false, message:error.message})
    }
}