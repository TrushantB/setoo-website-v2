import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth({
  loginPage: "/api/auth/login", // Redirect to login page if not authenticated
  isReturnToCurrentPage: true,
});

export const config = {
  matcher: [
    "/experience/ai-on-call-for-doctor",
    "/experience/digital-human-avatar",
    "/experience/multiple-people-conference-room-ai",
    "/experience/ai-on-call-for-meetings",
    "/experience/ai-on-call-for-client-reviews",
    "/experience/experience-personalized-engagement-ai",
   ]
};
