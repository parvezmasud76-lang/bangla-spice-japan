CREATE TABLE public.contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  email text,
  message text NOT NULL,
  handled boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_inquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_inquiries TO authenticated;
GRANT ALL ON public.contact_inquiries TO service_role;

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON public.contact_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 100
    AND length(message) BETWEEN 1 AND 2000
    AND (phone IS NULL OR length(phone) <= 30)
    AND (email IS NULL OR length(email) <= 255)
  );

CREATE POLICY "Authenticated staff can view inquiries"
  ON public.contact_inquiries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated staff can update inquiries"
  ON public.contact_inquiries FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated staff can delete inquiries"
  ON public.contact_inquiries FOR DELETE
  TO authenticated
  USING (true);