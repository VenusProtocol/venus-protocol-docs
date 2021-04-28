import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import data from 'containers/Data/Docs.json';

const SidebarWrapper = styled.div`
  display: flex;
  width: 416px;
  min-height: calc(100vh - 222px);
  background-color: var(--color-bg-sidebar);
  padding: 40px;

  @media (max-width: 1024px) {
    width: 250px;
    padding: 78px 0px 78px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  a {
    width: 316px;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-black);
    padding: 5px 24px;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .item-active {
    background-color: var(--color-light-yellow);
  }
`;

let isLockScroll = false;
let scrollTimer = null;

function Sidebar({ tabType, history }) {
  const [offset, setOffset] = useState(0);
  const [position, setPosition] = useState('static');
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [path, setPath] = useState('');

  const content = document.documentElement || document.body;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.pageYOffset);
    });
  }, [history]);

  useEffect(() => {
    if (offset < 60) {
      setPosition('static');
    } else if (offset > 60 && offset < content.scrollHeight - 600 - window.innerHeight) {
      setPosition('fixed');
      setTop(80);
    } else {
      setPosition('absolute');
      setBottom(500);
    }
    if (!isLockScroll) {
      (data[tabType || 'getstarted'] || []).map(d => {
        const menuItem = document.getElementById(`${tabType}-${d.hash}`);
        if (menuItem) {
          if (menuItem.offsetTop - window.innerHeight / 2 <= offset) {
            setPath(`${history.location.pathname}#${d.hash}`);
          }
        }
      });
    } else {
      scrollTimer = setTimeout(() => {
        isLockScroll = false;
        clearTimeout(scrollTimer);
      }, 5000);
    }
  }, [offset]);

  useEffect(() => {
    if (path) {
      history.push(path);
    }
  }, [path]);

  useEffect(() => {
    if (content && tabType && history.location) {
      const hash = history.location.hash ? history.location.hash.substr(1) : 'introduction';
      const menuItem = document.getElementById(`${tabType}-${hash}`);
      if (menuItem) {
        content.scrollTo({
          top: menuItem.offsetTop - window.innerHeight / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [tabType, history]);

  return (
    <SidebarWrapper className="flex-column">
      <div
        className="side-content"
        style={{
          position,
          top: position === 'fixed' ? top : 'unset',
          bottom: position === 'absolute' ? bottom : 'unset'
        }}
      >
        {(data[tabType || 'getstarted'] || []).map(d => (
          <a
            href={`#${d.hash}`}
            key={d.hash}
            className={`#${d.hash}` === (history.location.hash || `#${data[tabType || 'getstarted'][0].hash}`) ? 'flex align-center item-active' : 'flex align-center'}
            onClick={() => {
              isLockScroll = true;
              const menuItem = document.getElementById(`${tabType}-${d.hash}`);
              if (menuItem) {
                content.scrollTo({
                  top: menuItem.offsetTop - window.innerHeight / 2,
                  behavior: 'smooth'
                });
              }
            }}
          >
            {d.label}
          </a>
        ))}
      </div>
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {
  tabType: PropTypes.string,
  history: PropTypes.object
};

Sidebar.defaultProps = {
  tabType: 'getstarted',
  history: {}
};

export default withRouter(Sidebar);
