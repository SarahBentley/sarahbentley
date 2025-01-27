import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Math1 from './BlogPosts/Math1';
import Math2 from './BlogPosts/Math2';
import Math3 from './BlogPosts/Math3';
import Math4 from './BlogPosts/Math4';
import Math5 from './BlogPosts/Math5';
import Math6 from './BlogPosts/Math6';
import Math7 from './BlogPosts/Math7';
import Math8 from './BlogPosts/Math8';
import Math9 from './BlogPosts/Math9';
import '../css/Blog.css'

const MathPost = () => {
  const { id } = useParams(); // Get the post id from the URL params

  if (id === '1') {
    return (
      <div className="blog-post">
        <Math1/>
      </div>
  )} else if (id === '2') {
    return (
      <div className="blog-post">
        <Math2/>
      </div>
  )} else if (id === '3') {
    return (
      <div className="blog-post">
        <Math3/>
      </div>
  )} else if (id === '4') {
    return (
      <div className="blog-post">
        <Math4/>
      </div>
  )} else if (id === '5') {
    return (
      <div className="blog-post">
        <Math5/>
      </div>
  )} else if (id === '6') {
    return (
      <div className="blog-post">
        <Math6/>
      </div>
  )} else if (id === '7') {
    return (
      <div className="blog-post">
        <Math7/>
      </div>
  )} else if (id === '8') {
    return (
      <div className="blog-post">
        <Math8/>
      </div>
  )} else if (id === '9') {
    return (
      <div className="blog-post">
        <Math9/>
      </div>
  )}
};

export default MathPost;