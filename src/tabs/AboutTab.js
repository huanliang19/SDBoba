import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function AboutTab() {
  return (
    <main style={{ maxWidth: 800, margin: '20px auto 40px auto', textAlign: 'left' }}>
      <Typography variant="h4" component="h2" sx={{ color: '#8b7355', mb: 3, fontFamily: 'Inter, Segoe UI, Roboto, sans-serif', textAlign: 'center' }}>
        About This Blog
      </Typography>
      <Card sx={{ mb: 3, background: '#f8f3e6', border: '1px solid #e2d3c0', borderRadius: 4, boxShadow: '0 4px 16px #e3e6ee' }}>
        <CardContent sx={{ p: 5 }}>
          <Typography variant="h5" component="h3" sx={{ color: '#8b7355', mb: 3, fontFamily: 'Inter, Segoe UI, Roboto, sans-serif', px: 1 }}>
            About the Website
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.7, mb: 3, px: 1 }}>
            Welcome to SD Boba Shop Rankings! This is your go-to resource for discovering the best bubble tea spots in San Diego. 
            I've created this blog to share honest, no-frills reviews of boba shops across the city, helping fellow San Diegans and visitors find their perfect cup.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ background: '#f8f3e6', border: '1px solid #e2d3c0', borderRadius: 4, boxShadow: '0 4px 16px #e3e6ee' }}>
        <CardContent sx={{ pl: 8, pr: 5, pt: 5, pb: 5 }}>
          <Typography variant="h5" component="h3" sx={{ color: '#8b7355', mb: 3, fontFamily: 'Inter, Segoe UI, Roboto, sans-serif', px: 1 }}>
            About Me
          </Typography>
          <img
            src="/Huan-profile.jpg"
            alt="Huan"
            style={{ width: 120, height: 120, borderRadius: '18px', objectFit: 'cover', boxShadow: '0 2px 8px #e3e6ee', marginLeft: 8, marginRight: 20, marginBottom: 16, marginTop: 4, border: '3px solid #e2d3c0', background: '#fff', float: 'left' }}
          />
          <div style={{ flex: 1 }}>
            <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.7, mb: 3, px: 1 }}>
              Hi, I'm Huan! I'm a local San Diego resident and a self-proclaimed boba connoisseur who's been exploring 
              San Diego's boba scene for years.
              When it comes to boba, I believe that the foundation of any great boba drink is the
              quality of the tea itself. Tea first, sugars second, and boba third. Milk centric drinks are great too, and you'll see them recommended when they're really good.
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.7, mb: 3, px: 1, textAlign: 'center' }}>
              Hope you find this page infomative. Please give my recommendations a try! Thanks!
            </Typography>
          </div>
        </CardContent>
      </Card>
    </main>
  );
} 