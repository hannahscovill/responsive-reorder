import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(12, 1fr)', 
        gap: '20px', 
        padding: '20px' 
      }}>
        <div className="product-title" style={{ 
          gridColumn: 'span 6', 
          backgroundColor: '#f0f0f0', 
          padding: '20px', 
          border: '1px solid #ccc' 
        }}>
          <h2>Product Title</h2>
        </div>
        
        <div className="carousel" style={{ 
          gridColumn: 'span 6', 
          backgroundColor: '#f0f0f0', 
          padding: '20px', 
          border: '1px solid #ccc' 
        }}>
          <h3>Image Carousel</h3>
          <div style={{ height: '300px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            [Carousel Placeholder]
          </div>
        </div>
        
        <div className="product-details" style={{ 
          gridColumn: 'span 6', 
          backgroundColor: '#f0f0f0', 
          padding: '20px', 
          border: '1px solid #ccc' 
        }}>
          <h3>Product Details</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <style>{`
          @media (max-width: 768px) {
            .product-title {
              grid-column: span 12 !important;
              order: -1;
            }
            .carousel {
              grid-column: span 12 !important;
            }
            .product-details {
              grid-column: span 12 !important;
            }
          }
          
          @media (min-width: 769px) {
            .carousel {
              order: 1;
              grid-column: 1 / 7 !important;
              grid-row: 1 / 3;
            }
            .product-title {
              order: 2;
              grid-column: 7 / 13 !important;
              grid-row: 1;
              align-self: start;
            }
            .product-details {
              order: 3;
              grid-column: 7 / 13 !important;
              grid-row: 2;
              align-self: start;
            }
          }
        `}</style>
      </div> */}
      
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div style={{ flex: 1, position: 'relative', maxWidth: '200px' }}>
          <div style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '40px', 
            border: '1px solid #ccc',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            visibility: 'hidden'
          }}>
            Big Square
          </div>
          
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex', 
            flexDirection: 'column', 
            gap: '10px',
            overflowY: 'auto',
            padding: '10px'
          }}>
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} style={{ 
                backgroundColor: '#f0f0f0', 
                padding: '20px', 
                border: '1px solid #ccc',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80px',
                flexShrink: 0
              }}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '40px', 
          border: '1px solid #ccc',
          flex: 1,
          aspectRatio: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Big Square
        </div>
      </div>
    </div>
  )
}

export default App
