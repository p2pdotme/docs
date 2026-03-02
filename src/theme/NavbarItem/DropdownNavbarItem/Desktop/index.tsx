import React, {useState, useRef, useEffect, useCallback, type ReactNode} from 'react';
import clsx from 'clsx';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem from '@theme/NavbarItem';
import type {Props} from '@theme/NavbarItem/DropdownNavbarItem/Desktop';

export default function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  ...props
}: Props): ReactNode {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  const updateDropdownPosition = useCallback(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const newStyle: React.CSSProperties = {
        position: 'fixed',
        top: `${rect.bottom}px`,
        maxHeight: `calc(100vh - ${rect.bottom + 10}px)`,
        overflowY: 'auto',
        zIndex: 1000, // High z-index to sit on top of everything
        display: 'block' // Ensure it's shown when state is true
      };

      if (position === 'right') {
        newStyle.right = `${document.documentElement.clientWidth - rect.right}px`;
        newStyle.left = 'auto';
      } else {
        newStyle.left = `${rect.left}px`;
        newStyle.right = 'auto';
      }
      setDropdownStyle(newStyle);
    }
  }, [position]);

  const handleMouseEnter = () => {
    updateDropdownPosition();
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  // Update position on scroll/resize when dropdown is shown
  useEffect(() => {
    if (showDropdown) {
        updateDropdownPosition();
        window.addEventListener('scroll', updateDropdownPosition, true);
        window.addEventListener('resize', updateDropdownPosition);
        return () => {
            window.removeEventListener('scroll', updateDropdownPosition, true);
            window.removeEventListener('resize', updateDropdownPosition);
        }
    }
  }, [showDropdown, updateDropdownPosition]);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | TouchEvent | FocusEvent,
    ) => {
      if (
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('focusin', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('focusin', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx('navbar__item', 'dropdown', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}>
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => {
          e.preventDefault();
          if (showDropdown) handleMouseLeave();
          else handleMouseEnter();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}>
        {props.children ?? props.label}
      </NavbarNavLink>
      
      {showDropdown && (
        <ul className="dropdown__menu" style={dropdownStyle}>
            {items.map((childItemProps, i) => (
            <NavbarItem
                isDropdownItem
                activeClassName="dropdown__link--active"
                {...childItemProps}
                key={i}
            />
            ))}
        </ul>
      )}
    </div>
  );
}
