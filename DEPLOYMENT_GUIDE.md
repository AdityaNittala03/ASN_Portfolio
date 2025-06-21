# GitHub Pages Deployment Guide

## Prerequisites
1. Make sure you have Git installed on your system
2. Your GitHub repository is created: https://github.com/AdityaNittala03/ASN_Portfolio.git

## Step-by-Step Deployment Instructions

### 1. Move the Resume File
First, copy your resume to the public folder:
```bash
cp ADIYTA_NITTALA_RESUME.pdf public/ADITYA_NITTALA_RESUME.pdf
```

### 2. Install Dependencies (if not already done)
```bash
npm install
```

### 3. Install gh-pages package
```bash
npm install --save-dev gh-pages
```

### 4. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website with all components and features"
```

### 5. Connect to GitHub Repository
```bash
git branch -M main
git remote add origin https://github.com/AdityaNittala03/ASN_Portfolio.git
git push -u origin main
```

### 6. Deploy to GitHub Pages
```bash
npm run deploy
```

### 7. Configure GitHub Pages (Manual Step)
1. Go to your GitHub repository: https://github.com/AdityaNittala03/ASN_Portfolio
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 8. Access Your Live Website
Your portfolio will be available at: https://AdityaNittala03.github.io/ASN_Portfolio

## Configuration Details

### Files Modified for Deployment:
1. **package.json**: Added deployment scripts and homepage URL
2. **vite.config.js**: Added base path for GitHub Pages

### Deployment Scripts Added:
- `npm run predeploy`: Builds the project automatically before deployment
- `npm run deploy`: Deploys the built files to gh-pages branch

## Troubleshooting

### If deployment fails:
1. Make sure you're logged into GitHub CLI or have proper authentication
2. Check that the repository URL is correct
3. Ensure the gh-pages branch is created and set as the source in GitHub Settings

### If assets don't load:
1. Verify that all asset paths start with `/ASN_Portfolio/` in production
2. Check that the base path in vite.config.js matches your repository name

### For updates after initial deployment:
1. Make your changes
2. Commit changes: `git add . && git commit -m "Update: describe your changes"`
3. Push to main: `git push origin main`
4. Deploy: `npm run deploy`

## Notes
- The deployment process creates a separate `gh-pages` branch for the built files
- Your source code remains on the `main` branch
- GitHub Pages will automatically update when you run `npm run deploy`