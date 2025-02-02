<<<<<<< HEAD
// pages/api/submit-form.ts
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  form_data?: { name: string; email: string };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const form_data = req.body; // Getting form data from the body

    // Optionally, you could process the data or save it to a database here

    // Respond with the form data
    res.status(200).json({ message: 'Form submitted successfully!', form_data });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Handling non-POST requests
  }
}
=======
// pages/api/submit-form.ts
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  form_data?: { name: string; email: string };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const form_data = req.body; // Getting form data from the body

    // Optionally, you could process the data or save it to a database here

    // Respond with the form data
    res.status(200).json({ message: 'Form submitted successfully!', form_data });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Handling non-POST requests
  }
}
>>>>>>> 16c06b5ff41aa7d06f0cf739d82aa738ccab491e
