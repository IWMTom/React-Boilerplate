import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Link from "next/link";

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const Header = () => <header />;

export default Header;
