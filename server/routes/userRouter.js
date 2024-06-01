import express from 'express'
import { 
    getAllBooks, 
    getSingleBook, 
    addBook, 
    deleteBook, 
    updateBook 
} from '../controller/userController.js'

const router = express.Router()

router.get('/', getAllBooks)

router.get('/:id', getSingleBook)

router.post('/', addBook)

router.delete('/:id', deleteBook)

router.put('/:id', updateBook)



export default router