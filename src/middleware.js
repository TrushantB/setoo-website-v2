import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth({
  loginPage: "/api/auth/login", // Redirect to login page if not authenticated
  isReturnToCurrentPage: true,
});

export const config = {
  matcher: ["/experiences"
  ], // Protect these routes
};
