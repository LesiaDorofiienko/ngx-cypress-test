import { login } from "../../utils";

describe("Log in", () => {
  it("should login with valid credentials", () => {
    login({
      email: "Test@test.teeeest",
      password: "strong password",
      rememberMe: true,
    });
  });
});
