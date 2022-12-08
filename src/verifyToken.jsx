import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { verifyToken } from './store/actions/user';

export default function VerifyToken() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyToken(token, navigate));
  }, []);

  return <div>VerifyToken</div>;
}
