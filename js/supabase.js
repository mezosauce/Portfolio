const SUPABASE_URL = "https://wvededybxedrqqhbiykb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2ZWRlZHlieGVkcnFxaGJpeWtiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDYzNTA2NCwiZXhwIjoyMDY2MjExMDY0fQ.WOC8HMpaCyLhfTk4lul3PLhyYHowYqjtYOMMMz_POkA";

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;

  // Adjust the insert object to match your Supabase table columns
  const { data, error } = await supabase
    .from('report')
    .insert([{ 
      name: name, 
      email: email,
      company: company, // or use a separate column for phone if you have one
      content: message,
      created_at: new Date().toISOString()
    }]);

  if (error) {
    alert("Error: " + error.message);
    console.error("Error inserting data:", error);
  } else {
    alert("Message submitted successfully!");
    console.log("Data inserted successfully:", data);
    document.getElementById('contact-form').reset();
  }
});