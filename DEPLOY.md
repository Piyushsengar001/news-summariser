# Deployment Instructions

## Automatic Deployment to Netlify

Your News Bias Analyzer app is ready for deployment! Here are your options:

### Option 1: Using Builder.io Push Feature
1. Click the **Push/Create/PR** button in the top right of the Builder.io interface
2. This will create a GitHub repository with your code
3. Connect that repository to Netlify for automatic deployments

### Option 2: Manual Netlify Deployment
1. Download your project as a ZIP file
2. Extract the files locally
3. Run `npm install` and `npm run build`
4. Go to [netlify.com](https://netlify.com) and create an account
5. Drag and drop the `dist/spa` folder to Netlify's deployment area
6. Set environment variable: `GEMINI_API_KEY=AIzaSyBPn2D8pSlAnhAi6asUn0_AjOm2aD5JSPc`

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod
```

## Important Notes

1. **Environment Variables**: Make sure to set your `GEMINI_API_KEY` in Netlify's environment variables section
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist/spa`
   - Functions directory: `netlify/functions`

3. **Custom Domain**: After deployment, you can set up a custom domain in Netlify's settings

## Your App is Ready! 🚀

Your News Bias Analyzer includes:
- ✅ Clean, modern UI without Builder.io branding
- ✅ Interactive animations and hover effects  
- ✅ Fully responsive mobile design
- ✅ Working Gemini AI integration
- ✅ Optimized build configuration
- ✅ Netlify deployment ready

The app will work perfectly on Netlify with your Gemini API key for analyzing news articles!
