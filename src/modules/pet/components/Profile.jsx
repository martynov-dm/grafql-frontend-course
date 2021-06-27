import React from "react";
import { useQueryAllAvailablePets } from "../hooks/useQueryAllAvailablePets";
import { useQueryAvailablePets } from "../hooks/useQueryAvailablePets";
import { useQueryProfile } from "../hooks/useQueryProfile";

export const Profile = () => {
  const { getProfile, error, loading, profile } = useQueryProfile();

  const loadProfile = () => {
    getProfile({
      variables: { id: "C-1" },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>We have a problem: {error.message}</p>;

  return (
    <>
      <h1>Profile</h1>
      <button onClick={loadProfile}>Download Profile</button>
      <p>Name: {profile?.name}</p>
    </>
  );
};
