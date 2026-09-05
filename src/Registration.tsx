import { Link, useLocation } from 'wouter'
import './App.css'
import { useState } from 'react';

interface Member {
  id: string,
  name: string
}

const MIN_MEMBERS = 3;
const MAX_MEMBERS = 10;

function createNewMember(): Member {
  return { id: crypto.randomUUID(), name: "" };
}

function createInitialMembers(): Member[] {
  return Array.from({ length: MIN_MEMBERS }, createNewMember);
}


function Registration() {
  const [, navigate] = useLocation();
  const [members, setMembers] = useState<Member[]>(createInitialMembers);
  const [, setSubmitted] = useState<Member[] | null>(null);

  const canAddMember = members.length < MAX_MEMBERS;
  const canRemoveMember = members.length > MIN_MEMBERS;

  function addMember() {
    if (!canAddMember) return;
    setMembers((prev) => [...prev, createNewMember()]);
  }

  function removeMember(id: string) {
    if (!canRemoveMember) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }

  function updateMember(id: string, field: keyof Omit<Member, "id">, value: string) {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? {...m, [field]: value} : m))
    );
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (members.length < MIN_MEMBERS || members.length > MAX_MEMBERS) return;
    setSubmitted(members);
    navigate("/confirmation");
  }

  return (
    <>
      <h1>Register Now</h1>
      <form onSubmit={handleSubmit}>
        <label>School: </label>
        <select name="school">
          <option value="">Select School</option>
          <option value="">Penrith High School</option>
          <option value="">Girraween High School</option>
          <option value="">Baulkham Hills High School</option>
        </select>
        <br/>
        <label>Team Name:</label>
        <input type=""></input>
        <br/>
        {members.map((member, index) => (
          <div key={member.id}>
            <span>{index + 1}. </span>
            <input type="text" onChange={(e) => updateMember(member.id, "name", e.target.value)} placeholder="Griffin Shover" name="team" required></input>
            <button type="button" onClick={() => removeMember(member.id)} disabled={!canRemoveMember}>Remove</button>
            <br/>
          </div>
        ))}
        <button type="button" onClick={addMember} disabled={!canAddMember}>Add Member</button>
        <br/>

        <input type="submit" value="Register" />
      </form>

      <Link href="/">Return Home</Link>
    </>
  )
}

export default Registration
