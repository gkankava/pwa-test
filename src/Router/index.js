import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "components/Main";
import Location from "components/Location";
import Offers from "components/Offers";
import Event from "components/Event";
import News from "components/News";
import Auth from "components/Auth";
import Login from "components/Auth/components/Login";
import Register from "components/Auth/components/Register";

import { PrivateModal } from "ui/components";
import EditProfile from "components/EditProfile";
import Story from "components/Story";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="location/:id" element={<Location />} />
        <Route path="offers/:id" element={<Offers />} />
        <Route path="event/:id" element={<Event />} />
        <Route path="news/:id" element={<News />} />
        <Route path="story/:id" element={<Story />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="edit" element={<EditProfile />} />
      </Routes>
      <PrivateModal />
    </BrowserRouter>
  );
}

export default Router;
