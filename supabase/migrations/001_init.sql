-- Enable UUID extension
create extension if not exists "pgcrypto";

-- Products table (managed via Supabase dashboard or admin panel)
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  price numeric(10,2) not null,
  stripe_price_id text not null,
  cover_url text,
  file_path text not null, -- path inside 'ebooks' storage bucket
  active boolean default true,
  created_at timestamptz default now()
);

-- Orders table
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null,
  customer_email text not null,
  customer_name text not null,
  stripe_session_id text unique not null,
  download_token text unique not null,
  download_expires_at timestamptz not null,
  download_used boolean default false,
  status text not null default 'pending', -- pending | paid | refunded
  created_at timestamptz default now()
);

-- RLS: only admin (service role) can read orders
alter table orders enable row level security;
create policy "No public access to orders"
  on orders for all
  using (false);

-- RLS: products are publicly readable
alter table products enable row level security;
create policy "Products publicly readable"
  on products for select
  using (active = true);
