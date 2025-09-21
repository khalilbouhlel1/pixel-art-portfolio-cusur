# 🎨 Pixel Art Portfolio - Theme System

## Overview
This portfolio features a comprehensive theme system with 5 unique retro-inspired color schemes. Each theme maintains the pixel art aesthetic while offering distinct visual experiences.

## 🚀 Available Themes

### 1. **Cyberpunk Neon** (Default)
- **Colors**: Electric Purple (#ff00ff), Cyan (#00ffff), Hot Pink (#ff0080)
- **Background**: Deep purple-black (#0a0a0f)
- **Vibe**: Futuristic, electric, high-tech
- **Perfect for**: Tech enthusiasts, gamers, cyberpunk fans

### 2. **Retro Sunset**
- **Colors**: Orange (#ff6600), Golden Yellow (#ffaa00), Red (#ff3300)
- **Background**: Warm dark brown (#1a0f0a)
- **Vibe**: Warm, nostalgic, sunset vibes
- **Perfect for**: Creative professionals, warm personalities

### 3. **Matrix Green**
- **Colors**: Terminal Green (#00ff00), Dark Green (#00cc00), Forest Green (#00aa00)
- **Background**: Pure black (#000000)
- **Vibe**: Classic terminal, hacker aesthetic
- **Perfect for**: Developers, terminal lovers, Matrix fans

### 4. **Arctic Blue**
- **Colors**: Sky Blue (#00bfff), Light Blue (#87ceeb), Steel Blue (#4682b4)
- **Background**: Deep blue-black (#0a1a2e)
- **Vibe**: Cool, professional, ice-cold
- **Perfect for**: Professional portfolios, cool personalities

### 5. **Retro TV**
- **Colors**: White (#ffffff), Light Gray (#cccccc), Dark Gray (#888888)
- **Background**: Pure black (#000000)
- **Vibe**: Monochrome, CRT aesthetic, minimalist
- **Perfect for**: Minimalists, retro enthusiasts

## 🎛️ How to Use

### Theme Switcher
- Click the **THEME** button in the top-right corner
- Select from the dropdown menu
- Theme changes instantly and saves to localStorage

### Programmatic Theme Switching
```typescript
// Apply a theme programmatically
document.documentElement.classList.remove('theme-cyberpunk');
document.documentElement.classList.add('theme-matrix');
```

## 🛠️ Technical Implementation

### CSS Variables
Each theme uses CSS custom properties for dynamic color switching:
```css
.theme-cyberpunk {
  --pixel-neon-green: #ff00ff;
  --pixel-blue: #00ffff;
  --pixel-orange: #ff0080;
  /* ... */
}
```

### Tailwind Integration
Colors are mapped to Tailwind classes using CSS variables:
```typescript
colors: {
  'pixel-neon-green': 'var(--pixel-neon-green)',
  'pixel-blue': 'var(--pixel-blue)',
  // ...
}
```

### Components
- **ThemeSwitcher**: Interactive theme selection UI
- **ThemeProvider**: Initializes theme on app load
- **ThemeShowcase**: Displays all available themes

## 🎨 Customization

### Adding New Themes
1. Add CSS variables to `globals.css`:
```css
.theme-your-theme {
  --pixel-neon-green: #your-color;
  --pixel-blue: #your-color;
  /* ... */
}
```

2. Update Tailwind config if needed
3. Add theme data to `ThemeSwitcher.tsx`
4. Update theme showcase if desired

### Color Guidelines
- Maintain high contrast for accessibility
- Use colors that work well with the pixel art aesthetic
- Ensure all UI elements remain visible across themes
- Test with the existing component library

## 🌟 Features

- ✅ **Instant switching** - No page reload required
- ✅ **Persistent storage** - Theme choice saved in localStorage
- ✅ **Accessibility** - High contrast maintained across themes
- ✅ **Responsive** - Works on all device sizes
- ✅ **Animated** - Smooth transitions between themes
- ✅ **Extensible** - Easy to add new themes

## 🎯 Best Practices

1. **Test thoroughly** - Ensure all components work with each theme
2. **Maintain contrast** - Keep text readable across all themes
3. **Consistent branding** - Each theme should feel cohesive
4. **Performance** - Use CSS variables for efficient theme switching
5. **User experience** - Provide clear visual feedback for theme changes

## 🔮 Future Enhancements

- [ ] Theme-specific animations
- [ ] Custom theme builder
- [ ] Theme preview mode
- [ ] Seasonal themes
- [ ] User-uploaded themes
- [ ] Theme marketplace

---

*Built with ❤️ and lots of pixels*
