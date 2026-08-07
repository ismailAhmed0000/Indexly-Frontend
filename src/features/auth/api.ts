import { apiFetch } from "../../lib/api-client";
import type { AuthResponse, LoginPayload, RegisterPayload } from "./types";

export function registerUser(payload: RegisterPayload) {
  return apiFetch<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function loginUser(payload: LoginPayload) {
  return apiFetch<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
