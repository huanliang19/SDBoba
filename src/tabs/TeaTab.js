import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function TeaTab({ teaList }) {
  return (
    <main style={{ maxWidth: 800, margin: '0.7rem auto 2rem auto', textAlign: 'left' }}>
      <Typography variant="h4" component="h2" sx={{ color: '#8b7355', mb: 3, fontFamily: 'Inter, Segoe UI, Roboto, sans-serif', textAlign: 'center' }}>
        Tea Guide
      </Typography>
      <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, mb: 4, textAlign: 'center' }}>
        Discover the looseleaf teas that form the foundation of boba drinks.
      </Typography>
      {teaList.map((tea, index) => (
        <Card key={index} sx={{ mb: 4, background: '#f8f3e6', border: '1px solid #e2d3c0', borderRadius: 4, boxShadow: '0 4px 16px #e3e6ee', p: 0 }}>
          <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 40, alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Left: Descriptions */}
              <div style={{ flex: 2, minWidth: 0, paddingRight: 12 }}>
                <Typography variant="body2" sx={{ color: '#b89b72', mb: 1, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
                  {tea.origin}
                </Typography>
                <Typography variant="body1" sx={{ color: '#8b7355', mb: 2, fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6 }}>
                  {tea.description}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8b7355', mb: 2, fontWeight: 500 }}>
                  <strong>How it tastes:</strong> {tea.taste}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8b7355', mb: 1 }}>
                  <strong>How it's made:</strong> {tea.process}
                </Typography>
                <Typography variant="body2" sx={{ color: '#8b7355', lineHeight: 1.5 }}>
                  <strong>How to brew:</strong> {tea.brewing}
                </Typography>
              </div>
              {/* Right: Image and Title */}
              <div style={{ flex: 1, minWidth: 180, maxWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff9f2', borderRadius: 16, boxShadow: '0 2px 8px #e3e6ee', padding: 18 }}>
                <img 
                  src={tea.image} 
                  alt={tea.name}
                  style={{ 
                    width: 140, 
                    height: 110, 
                    objectFit: 'cover', 
                    borderRadius: 10, 
                    boxShadow: '0 2px 8px #e3e6ee',
                    border: '1px solid #e2d3c0',
                    marginBottom: 18,
                    background: '#fff'
                  }} 
                />
                <Typography variant="h6" component="h3" sx={{ color: '#8b7355', fontFamily: 'Inter, Segoe UI, Roboto, sans-serif', mt: 0, ml: 0, fontWeight: 700, textAlign: 'center', fontSize: '1.1rem', letterSpacing: 0.5 }}>
                  {tea.name}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </main>
  );
} 