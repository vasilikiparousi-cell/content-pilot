# Deploy to Vercel — Step by Step

## Step 1: Create GitHub account
Go to: https://github.com → Sign up (free)

## Step 2: Create new repository
1. Click the "+" icon top right → "New repository"
2. Name: `paros-safari-app`
3. Private ✅
4. Click "Create repository"

## Step 3: Upload the app folder
1. On the repository page, click "uploading an existing file"
2. Drag the entire `app` folder contents here
3. Click "Commit changes"

## Step 4: Deploy to Vercel
Go to: https://vercel.com → Sign up with GitHub

1. Click "Add New Project"
2. Select your `paros-safari-app` repo
3. Click "Deploy" (Vercel auto-detects Next.js)

## Step 5: Add Environment Variables
In Vercel → Project Settings → Environment Variables, add:

```
NEXT_PUBLIC_SUPABASE_URL = https://cgoifymvchvawisjonxc.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = sb_publishable_2QUlYWgTTKbj1nQeP97Cuw_P1SbsBIl
SUPABASE_SECRET_KEY = sb_secret_8bPH8byzUaau9lYhbybvqQ_Ev_3zKmf
ANTHROPIC_API_KEY = [your new Claude API key]
NEXT_PUBLIC_BUSINESS_ID = e75fabaa-39d1-4ac1-8536-772f7f11d14e
```

## Step 6: Redeploy
Click "Redeploy" → Your app is live at `your-project.vercel.app`

## Step 7: Create Supabase Storage Bucket
In Supabase Dashboard → Storage → New Bucket:
- Name: `media`
- Public: ✅ (so images/videos are accessible)

Done! 🎉
