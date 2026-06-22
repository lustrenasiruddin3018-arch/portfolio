/*
# Create contact_messages table

1. New Tables
- `contact_messages` - Stores messages submitted via the contact form
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, not null) - Sender's name
  - `email` (text, not null) - Sender's email address
  - `phone` (text, nullable) - Sender's phone number
  - `subject` (text, not null) - Message subject
  - `message` (text, not null) - Message content
  - `created_at` (timestamptz) - When the message was submitted

2. Security
- Enable RLS on `contact_messages`
- Allow anonymous inserts so visitors can submit contact forms without authentication
- No select/update/delete policies needed as this is a submission-only table
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);
