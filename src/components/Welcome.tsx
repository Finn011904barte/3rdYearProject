type WelcomeProps = {
  user: string;
};

export default function Welcome({ user }: WelcomeProps) {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f7fa',
      }}
    >
      <h1 style={{ fontSize: '2rem', color: '#333' }}>
        Welcome to Derma AI, {user}!
      </h1>
    </div>
  );
}
