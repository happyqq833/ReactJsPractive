import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import ModalAddNew from './components/ModalAddNew';

// Mock API
jest.mock('./service/userServices', () => ({
  postCreateUser: jest.fn(),
}));

describe('ModalAddNew', () => {
  const handleCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // test('hiển thị modal khi show=false', () => {
  //   render(<ModalAddNew show={false} handleClose={handleCloseMock}/>);

  //   expect(screen.queryByText(/Add new user/i)).not.toBeInTheDocument();
  //   expect(screen.queryByPlaceholderText(/Enter Name/i)).not.toBeInTheDocument();
  //   expect(screen.queryByPlaceholderText(/Job/i)).not.toBeInTheDocument();
  // });

  // test('hiển thị modal khi show=true', () => {
  //   render(<ModalAddNew show={true} handleClose={handleCloseMock} />);

  //   expect(screen.getByText(/Add new user/i)).toBeInTheDocument();
  //   expect(screen.getByPlaceholderText(/Enter Name/i)).toBeInTheDocument();
  //   expect(screen.getByPlaceholderText(/Job/i)).toBeInTheDocument();
  // });

  // test('focus vào ô input khi mở modal', () => {
  //   render(<ModalAddNew show={true} handleClose={handleCloseMock} />);
  //   const nameInput = screen.getByPlaceholderText(/Enter Name/i);
  //   expect(nameInput).toHaveFocus();
  // });


  
test('nhập name', async () => {
  const user = userEvent.setup();

  await act(async () => {
    render(<ModalAddNew show={true} handleClose={handleCloseMock} />);
  });

  const nameInput = await screen.findByPlaceholderText(/Enter Name/i);
  await user.type(nameInput, 'Quynh');

  await waitFor(() => {
    expect(nameInput).toHaveValue('Quynh');
  });
});

  //   test('nhập job', async () => {
  //   render(<ModalAddNew show={true} handleClose={handleCloseMock} />);

  //   const jobInput = screen.getByPlaceholderText(/Job/i);
  //   const user = userEvent.setup(); 

  //   await user.type(jobInput, 'Dev');
      
  // await waitFor(() => {
  //     expect(jobInput).toHaveValue('Dev');
  //   });
  // });

});
