import toast from 'react-hot-toast';

const useToast = () => {
  const raiseToast = content =>
    toast(content, {
      duration: 4000,
      position: 'top-center',
    });

  return raiseToast;
};

export default useToast;
