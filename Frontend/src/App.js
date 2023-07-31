import { lazy, Suspense } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

//components
import UserProvider from "./context/UserProvider";
import AccountProvider from "./context/AccountProvider";

import Loader from "./components/loader/Loader";

const Messenger = lazy(() => import("./components/Messenger"));

function App() {
  const clientId='312684018750-na9uuiiiif3459bijnlhe2c3hr5h9dct.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger />
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
