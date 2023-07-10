import '@styles/global.scss';
import '@styles/reset.scss';
import DefaultRouter from '@src/routes/DefaultRoute';
import { useEffect } from 'react';
import { Provider } from './core/store';
import { login, logout, onUserStateChange } from './firebase'
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <p>app</p>
  }
])

function App(){
  return <RouterProvider router={router} />
}
// function App() {
//   // useEffect(() => {
//   //   console.log(
//   //     `############### Environment :: ${process.env.VITE_NODE_ENV} ###############`,
//   //   );
//   // }, []);

//   return (
//     // <QueryClientProvider client={queryClient}>
//     //   <AuthContextProvider>
//     //   <UserHeader />

//     //   </AuthContextProvider>
//     // </QueryClientProvider>
    
//   )
// }

export default App;
