import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Table from "./components/Table";
import "./index.css";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main">

        <Navbar />

        <div className="content">
          <h1>Dashboard</h1>
          <p className="welcome">Welcome back! Here's what's happening today.</p>

          <div className="cards">

            <Card
              title="Total Users"
              value="1,245"
              icon="👥"
            />

            <Card
              title="Revenue"
              value="12,450"
              icon="💰"
            />

            <Card
              title="Projects"
              value="24"
              icon="📁"
            />

            <Card
              title="Growth"
              value="+18%"
              icon="📈"
            />

          </div>

          <div className="dashboard-grid">

            <div className="box">
              <h2>Recent Activity</h2>

              <div className="activity">
                <span>👤</span>
                <div>
                  <b>New user registered</b>
                  <p>2 minutes ago</p>
                </div>
              </div>

              <div className="activity">
                <span>💰</span>
                <div>
                  <b>Payment received</b>
                  <p>15 minutes ago</p>
                </div>
              </div>

              <div className="activity">
                <span>📁</span>
                <div>
                  <b>New project created</b>
                  <p>1 hour ago</p>
                </div>
              </div>

            </div>

            <div className="box">
              <h2>Quick Overview</h2>

              <div className="progress-item">
                <div>
                  <span>Projects</span>
                  <span>75%</span>
                </div>

                <div className="progress">
                  <div style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div>
                  <span>Tasks</span>
                  <span>60%</span>
                </div>

                <div className="progress">
                  <div style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div>
                  <span>Goals</span>
                  <span>90%</span>
                </div>

                <div className="progress">
                  <div style={{ width: "90%" }}></div>
                </div>
              </div>

            </div>

          </div>

          <Table />

        </div>

      </main>

    </div>
  );
}

export default App;