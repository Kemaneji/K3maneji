document.addEventListener('DOMContentLoaded', () => {
            const cursor = document.querySelector('.cursor');
            const follower = document.querySelector('.cursor-follower');
            

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                

                setTimeout(() => {
                    follower.style.left = e.clientX + 'px';
                    follower.style.top = e.clientY + 'px';
                }, 100);
            });
            

            document.querySelectorAll('a, button, .clickable').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('active');
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('active');
                });
            });
            

            document.addEventListener('mousedown', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
            });
            
            document.addEventListener('mouseup', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });