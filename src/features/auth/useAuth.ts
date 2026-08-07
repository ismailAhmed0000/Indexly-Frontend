import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./api";
import { useAuthContext } from "./AuthContext";

export function useLogin() {
  const { setAuth } = useAuthContext();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
    },
  });
}

export function useRegister() {
  const { setAuth } = useAuthContext();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
    },
  });
}
