interface StudentProps {
  params: { studid: string };  //  ye Next.js automatically deta hai
}

export default function StudentDetails({ params }: StudentProps) {
  return (
    <div>
      <h1>Student Details</h1>
      <p>You are viewing details of student with ID: {params.studid}</p>
    </div>
  );
}
