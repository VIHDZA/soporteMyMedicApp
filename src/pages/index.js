import React from 'react';
import {Redirect} from '@docusaurus/router';
import styles from './index.module.css';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function Home() {
  return <Redirect to="/docs/intro" />;
};