# How to Add Your Sports Photos

## Step 1: Upload Your Photos

1. In your GitHub repository, click **"Add file"** → **"Upload files"**
2. Create a new folder called `images` (or use existing)
3. Upload your JPG or PNG photo files
4. Commit the changes

**File naming tip:** Use clear names like `football_001.jpg`, `basketball_action.jpg`

## Step 2: Add Photos to Your Portfolio

Open `script.js` and add your photos to the `photos` array. Here's how:

### Simple Example:
```javascript
const photos = [
    {
        id: 1,
        image: "images/football_001.jpg",
        title: "Perfect Catch",
        description: "Amazing football catch during the championship game",
        category: "football"
    },
    {
        id: 2,
        image: "images/basketball_002.jpg",
        title: "Fast Break",
        description: "Quick transition to the basket",
        category: "basketball"
    },
];
```

### Photo Object Explained:
- **id**: A unique number for each photo (1, 2, 3, etc.)
- **image**: Path to your photo file (images/filename.jpg)
- **title**: Name of your photo
- **description**: Short description (1-2 sentences)
- **category**: One of these:
  - `football`
  - `basketball`
  - `soccer`
  - `other`

## Step 3: Commit Your Changes

1. Edit `script.js` with your photo information
2. Click **"Commit changes"**
3. Your website will update automatically!

## Step 4: View Your Website

Go to: `https://astegren.github.io/astegren.jpeg/`

## Tips:

✅ **Photo Size:** Resize photos to around 800x600px for faster loading
✅ **Quality:** Use JPG format for photos (smaller file size)
✅ **Organization:** Group similar sports photos in your descriptions
✅ **Descriptions:** Keep titles and descriptions short and catchy
✅ **Categories:** Use the category buttons to help visitors find what they want

## Example with More Photos:

```javascript
const photos = [
    {
        id: 1,
        image: "images/football_tackle.jpg",
        title: "Hard Tackle",
        description: "Defensive play during league championship",
        category: "football"
    },
    {
        id: 2,
        image: "images/basketball_slam.jpg",
        title: "Slam Dunk",
        description: "Power move in the paint",
        category: "basketball"
    },
    {
        id: 3,
        image: "images/soccer_goal_celebration.jpg",
        title: "Goal Celebration",
        description: "Team celebrates after scoring",
        category: "soccer"
    },
    {
        id: 4,
        image: "images/tennis_serve.jpg",
        title: "Ace Serve",
        description: "Powerful serve on match point",
        category: "other"
    },
];
```

## Need Help?

- Photos not showing? Check that the file path in `image:` matches exactly where you uploaded it
- Want to change colors? Edit `styles.css`
- Want to add new sport categories? Edit the buttons in `index.html` and add new categories to your photos

Happy photographing! 📸⚽🏀🏈🎾
