import PDFMake from 'pdfmake'
import downloadResume from '../downloadResume'
import content from '../content'

jest.mock('pdfmake', () => {
    const download = jest.fn()
    const createPdf = jest.fn(() => ({ download }))
    return { createPdf }
});

describe('downloadResume function', () => {
    it('returns a function', () => {
        expect(typeof downloadResume(content)).toBe('function')
    })
    describe('pdfmake', () => {
        beforeEach(() => {
            downloadResume(content)()
        })
        it('calls pdfmake.createPdf', () => {
            expect(PDFMake.createPdf).toBeCalled()
        })
        it('calls pdfmake.createPdf.download', () => {
            expect(PDFMake.createPdf().download).toBeCalled()
        })
    })
})