import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { postCreateUser } from '../service/userServices'
import ModalAddNew from './ModalAddNew'

jest.mock('../service/userServices', () => ({
  postCreateUser: jest.fn(),
}))

describe('ModalAddNew', () => {
  const handleClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('hiển thị modal và các input', () => {
    render(<ModalAddNew show={true} handleClose={handleClose} />)

    expect(screen.getByText('Add new user')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Job')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  test('submit form gọi API và đóng modal', async () => {
    const user = userEvent.setup()
    postCreateUser.mockResolvedValue({ id: 123 })

    render(<ModalAddNew show={true} handleClose={handleClose} />)

    await user.type(screen.getByPlaceholderText('Enter Name'), 'Quỳnh')
    await user.type(screen.getByPlaceholderText('Job'), 'Frontend Dev')
    await user.click(screen.getByText('Submit'))

    expect(postCreateUser).toHaveBeenCalledWith('Quỳnh', 'Frontend Dev')
    expect(handleClose).toHaveBeenCalled()
  })
})
