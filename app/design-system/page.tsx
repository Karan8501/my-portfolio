"use client";

import { useTheme } from "../providers/ThemeProvider";

export default function DesignSystemPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ 
      backgroundColor: 'var(--surface-primary)', 
      minHeight: '100vh',
      padding: 'var(--spacing-2xl) var(--spacing-lg)',
      color: 'var(--text-primary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '800',
            marginBottom: 'var(--spacing-md)',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Design System Showcase
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)',
            marginBottom: 'var(--spacing-lg)'
          }}>
            Explore all UI components in {theme} mode
          </p>
          <button
            onClick={toggleTheme}
            style={{
              padding: 'var(--spacing-md) var(--spacing-xl)',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--text-inverse)',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Color Palette */}
        <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)'
          }}>
            Color Palette
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {[
              { name: 'Primary', color: 'var(--color-primary)' },
              { name: 'Secondary', color: 'var(--color-secondary)' },
              { name: 'Accent', color: 'var(--color-accent)' },
              { name: 'Success', color: 'var(--color-success)' },
              { name: 'Error', color: 'var(--color-error)' },
              { name: 'Warning', color: 'var(--color-warning)' },
            ].map((item) => (
              <div key={item.name} style={{
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border-primary)',
              }}>
                <div style={{
                  width: '100%',
                  height: '80px',
                  backgroundColor: item.color,
                  borderRadius: '8px',
                  marginBottom: 'var(--spacing-md)',
                }}></div>
                <p style={{ 
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  {item.name}
                </p>
                <code style={{ 
                  fontSize: '0.875rem',
                  color: 'var(--text-tertiary)'
                }}>
                  {item.color}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)'
          }}>
            Buttons
          </h2>
          
          <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-secondary)'
            }}>
              Solid Buttons
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
              }}>
                Primary Button
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
              }}>
                Secondary Button
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
              }}>
                Accent Button
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'var(--color-success)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
              }}>
                Success Button
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'var(--color-error)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
              }}>
                Error Button
              </button>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-secondary)'
            }}>
              Outline Buttons
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'transparent',
                color: 'var(--color-primary)',
                border: '2px solid var(--color-primary)',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}>
                Primary Outline
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'transparent',
                color: 'var(--color-secondary)',
                border: '2px solid var(--color-secondary)',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}>
                Secondary Outline
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                backgroundColor: 'transparent',
                color: 'var(--color-accent)',
                border: '2px solid var(--color-accent)',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}>
                Accent Outline
              </button>
            </div>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-secondary)'
            }}>
              Gradient Buttons
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                background: 'var(--gradient-primary)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-lg)',
              }}>
                Gradient Primary
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                background: 'var(--gradient-secondary)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-lg)',
              }}>
                Gradient Secondary
              </button>
              <button style={{
                padding: 'var(--spacing-md) var(--spacing-xl)',
                background: 'var(--gradient-accent)',
                color: 'var(--text-inverse)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-lg)',
              }}>
                Gradient Accent
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)'
          }}>
            Cards
          </h2>

          <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-secondary)'
            }}>
              Cards with Shadows
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              <div style={{
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)'
                }}>
                  Small Shadow Card
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This card uses --shadow-sm for a subtle elevation effect. Perfect for less important content.
                </p>
              </div>

              <div style={{
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-md)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)'
                }}>
                  Medium Shadow Card
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This card uses --shadow-md for a balanced elevation. Great for most card components.
                </p>
              </div>

              <div style={{
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)'
                }}>
                  Large Shadow Card
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This card uses --shadow-lg for prominent elevation. Ideal for featured content.
                </p>
              </div>

              <div style={{
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-xl)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)'
                }}>
                  Extra Large Shadow
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This card uses --shadow-xl for maximum elevation. Best for modals or hero cards.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-secondary)'
            }}>
              Cards without Shadows (Border Only)
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              <div style={{
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '16px',
                border: '1px solid var(--border-primary)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)'
                }}>
                  Simple Border Card
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This card has no shadow, just a subtle border. Clean and minimal design.
                </p>
              </div>

              <div style={{
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '16px',
                border: '2px solid var(--color-primary)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--color-primary)'
                }}>
                  Primary Border Card
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  This card uses a colored border to draw attention without shadows.
                </p>
              </div>

              <div style={{
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--surface-secondary)',
                borderRadius: '16px',
                border: '2px solid var(--color-accent)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--color-accent)'
                }}>
                  Accent Border Card
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Accent-colored border for highlighting special content.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-secondary)'
            }}>
              Gradient Cards
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              <div style={{
                padding: 'var(--spacing-xl)',
                background: 'var(--gradient-primary)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-inverse)'
                }}>
                  Primary Gradient
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                  Beautiful gradient background with primary colors. Perfect for hero sections.
                </p>
              </div>

              <div style={{
                padding: 'var(--spacing-xl)',
                background: 'var(--gradient-secondary)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-inverse)'
                }}>
                  Secondary Gradient
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                  Eye-catching purple to pink gradient for standout content.
                </p>
              </div>

              <div style={{
                padding: 'var(--spacing-xl)',
                background: 'var(--gradient-accent)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-inverse)'
                }}>
                  Accent Gradient
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
                  Warm amber to red gradient for calls-to-action and highlights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Cards */}
        <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)'
          }}>
            Interactive Cards (Hover Me!)
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  padding: 'var(--spacing-xl)',
                  backgroundColor: 'var(--surface-secondary)',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '12px',
                  marginBottom: 'var(--spacing-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'var(--text-inverse)'
                }}>
                  {i}
                </div>
                <h4 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)'
                }}>
                  Interactive Card {i}
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Hover over this card to see smooth elevation and transform animations.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)'
          }}>
            Typography
          </h2>
          <div style={{
            padding: 'var(--spacing-xl)',
            backgroundColor: 'var(--surface-secondary)',
            borderRadius: '16px',
            border: '1px solid var(--border-primary)',
          }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
              Heading 1
            </h1>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
              Heading 2
            </h2>
            <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
              Heading 3
            </h3>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
              Heading 4
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 'var(--spacing-md)', lineHeight: '1.6' }}>
              Primary text: The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)', lineHeight: '1.6' }}>
              Secondary text: The quick brown fox jumps over the lazy dog.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-tertiary)', lineHeight: '1.6' }}>
              Tertiary text: The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
