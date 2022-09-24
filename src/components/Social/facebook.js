import { setTokenHeader } from "api";
import { loginFacebook } from "api/lib/social";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStore } from "store";

export default function SocialFacebook() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const navigate = useNavigate();

  const loginF = async () => {
    loginFacebook(code)
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.access_token.token);
        setTokenHeader(res.data.access_token.token);
        setCurrentUser({
          currentUser: {
            isAuthenticated: true,
            user: res.data.user,
            fetching: false,
            fetched: true,
            error: null,
          },
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    loginF();
    // eslint-disable-next-line
  }, []);
  return null;
}
