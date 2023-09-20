// this will allow us to move to other pages within our application
import Link from 'next/link';
// this will automatically optimize the images for us
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  return (
    <nav>Nav</nav>
  )
}

export default Nav