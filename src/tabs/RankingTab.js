import React from 'react';
import { Card, CardContent, Typography, Rating, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function RankingTab({ shops, openIndexes, toggleDropdown, cardColors, MenuDropdown }) {
  return (
    <main style={{ maxWidth: 600, margin: '0.1rem auto 2rem auto', textAlign: 'left' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{
          fontFamily: 'Inter, Segoe UI, Roboto, sans-serif',
          color: '#8b7355',
          mb: 0.2,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontWeight: 700,
          fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.1rem' },
          maxWidth: '100%',
          px: 2,
          display: 'block',
        }}
      >
        SD Boba Shop Rankings
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        sx={{
          fontFamily: 'Inter, Segoe UI, Roboto, sans-serif',
          color: '#b89b72',
          fontSize: '1rem',
          mb: 2.2,
          letterSpacing: 1,
          opacity: 0.85,
          mt: 0.1,
        }}
      >
        No-frills reviews from a local boba connoisseur
      </Typography>
      {shops.map((shop, idx) => (
        <Card key={shop.name} sx={{ mb: 3, borderRadius: 3, boxShadow: 3, background: cardColors[idx % cardColors.length] }}>
          <CardContent sx={{ pb: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 20 }}>
              <div style={{ minWidth: 32, minHeight: 32, background: '#f5e9da', color: '#b89b72', fontWeight: 700, fontSize: 22, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px #e3e6ee', marginRight: 8 }}>
                {idx + 1}
              </div>
              {shop.logo && (
                <img src={shop.logo} alt={shop.name + ' logo'} style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px #eee', marginRight: 8 }} />
              )}
              <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="h5" component="div" sx={{ fontFamily: 'Inter, Segoe UI, Roboto, sans-serif', color: '#8b7355', mb: 0.5 }}>
                    {shop.name}
                  </Typography>
                  <Rating value={shop.stars} precision={0.1} readOnly size="small" sx={{ color: '#a0522d', mb: 0.5, mt: -0.5 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    <strong>Location:</strong> {shop.location}
                  </Typography>
                </div>
                <IconButton onClick={() => toggleDropdown(idx)} aria-label="expand review" size="large" sx={{ alignSelf: 'flex-start', ml: 1 }}>
                  {openIndexes.includes(idx) ? <ExpandLessIcon sx={{ color: '#a0522d' }} /> : <ExpandMoreIcon sx={{ color: '#a0522d' }} />}
                </IconButton>
              </div>
            </div>
            <Collapse in={openIndexes.includes(idx)} timeout="auto" unmountOnExit>
              <div style={{ marginTop: 16 }}>
                <Typography variant="body2" sx={{ background: '#f8f3e6', borderRadius: 2, p: 2, color: '#8b7355', boxShadow: 1, mb: 2, position: 'relative', overflow: 'hidden' }}>
                  <img src={shop.yelpImage} alt={shop.name + ' yelp large'} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 12, boxShadow: '0 2px 8px #f7d6e0', float: 'left', marginRight: 20, marginBottom: 8 }} />
                  {shop.details}
                </Typography>
              </div>
              <Card sx={{ mt: 3, mb: 2, background: '#fafaf0', borderRadius: 3, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ color: '#8b7355', fontWeight: 600, mb: 2, mt: 0.5, fontFamily: 'Inter, Segoe UI, Roboto, sans-serif', paddingLeft: '0.5rem' }}>
                    Notable Drinks
                  </Typography>
                  <div className="top-drinks-list">
                    {shop.bestDrinks.map((drink) => (
                      <div key={drink.name}>
                        <img src={drink.image} alt={drink.name} />
                        <div style={{ textAlign: 'left' }}>
                          <Typography variant="subtitle2">{drink.name}</Typography>
                          <Typography variant="body2">{drink.review}</Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {shop.menuImages && shop.menuImages.length > 0 && (
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <MenuDropdown menuImages={shop.menuImages} />
                </div>
              )}
            </Collapse>
          </CardContent>
        </Card>
      ))}
    </main>
  );
} 