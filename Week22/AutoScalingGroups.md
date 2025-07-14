# 🔥 AWS Auto Scaling & Chaos Engineering Journey – Vinay's Infra Logs

## 🗓️ Date: July 2025

---

## 🧠 Objective

Simulate real-world auto-scaling and crash recovery on EC2 using Load Balancer, Target Groups, Launch Templates, and ASG in AWS. Learn by doing, including breaking things intentionally to understand behavior.

---

## ⚙️ Infra Stack Setup

* ✅ Created Node.js app listening on **port 3000**
* ✅ Installed **PM2** to manage app
* ✅ Created **AMI** after testing app
* ✅ Built a **Launch Template** with user data to start app with PM2
* ✅ Created **Security Group** allowing **22, 80, 443, 3000**
* ✅ Built **Application Load Balancer (ALB)**

  * Listener: HTTP:80
  * Target Group: HTTP:3000
* ✅ Created **Auto Scaling Group (ASG)**

  * Launch Template attached
  * Target Group attached
  * Health Check: ALB (port 3000)

---

## ❌ Issues Encountered + Fixes

### 1. **App not healthy in Target Group**

* **Issue:** ALB Target Group showed instance as `Unhealthy`
* **Cause:** App not running due to missing PM2
* **Fix:** Added PM2 install + app start in launch template user data

### 2. **LB not routing to app**

* **Issue:** Load balancer gave no response
* **Cause:** Security Group didn’t allow port 3000
* **Fix:** Added inbound rule for port 3000

### 3. **Health check failing**

* **Issue:** Health check endpoint `/` or `/health` failed
* **Cause:** App not listening or wrong path
* **Fix:** Ensured health check path exists, app is up

### 4. **Scaling not triggering at high CPU**

* **Issue:** Stressing one instance with `stress` didn’t trigger scaling
* **Cause:** Scaling policy uses **average CPU**, not per-instance
* **Fix:** Stressed all instances or lowered target CPU to trigger scaling

### 5. **Crash simulation: Couldn’t delete `/boot`**

* **Issue:** `rm -rf /boot` failed with `resource busy`
* **Cause:** Kernel locks `/boot` as it's in use
* **Fix:** Used `echo c > /proc/sysrq-trigger` to cause kernel panic

---

## 💣 Crash Simulation Methods Tried

| Method                         | Result                              |
| ------------------------------ | ----------------------------------- |
| `rm -rf /boot`                 | ❌ Resource busy                     |
| `echo c > /proc/sysrq-trigger` | ✅ Instant kernel panic              |
| `stress --cpu 2`               | ✅ Simulated CPU spike               |
| `sudo shutdown -h now`         | ✅ Clean termination                 |
| `dd if=/dev/zero of=/dev/xvda` | 💀 Total volume wipe (not executed) |

---

## 📈 Scaling Policy Used

* **Policy Type:** Target Tracking
* **Metric:** Avg CPU Utilization
* **Target:** 50%
* **Cooldown:** Default (300s)
* **Issue Faced:** Not scaling if only 1 instance spikes

---

## 🧪 ASG Test Plan Summary

1. Scale desired = 1 → Run `stress` → Wait
2. CloudWatch → Confirm CPU spike
3. Activity history → Check scale-up event
4. Confirm new instance is added
5. Health check OK → Load balancer serves traffic

---

## ✅ Final State

* App is running in ASG with auto-healing
* LB forwarding traffic to instances on port 3000
* Scaling policy works when conditions are met
* Successfully simulated real-world failures

---

## 🧠 Key Learnings

* **ASG scales on average CPU**, not per-instance
* **PM2 must be in user data** or AMI
* **/boot cannot be deleted while system is running**
* Kernel panic is best for real crash test
* CloudWatch metrics lag by 2–5 minutes
* Health checks must match app's actual behavior

---

## 🧰 Tools Used

* AWS EC2, ASG, ALB, Target Group
* PM2
* stress
* `dd`, `rm`, `sysrq-trigger`
* CloudWatch

---

## 🚀 Next Steps (Optional)

* Add GitHub Actions to build AMIs and update ASG
* Use step scaling or scheduled scaling
* Implement lifecycle hooks and termination notifications
* Create chaos test scripts
* Explore memory-based scaling (CloudWatch custom metrics)

---

*Vinay’s Infra Playground: broken things on purpose, learned everything the hard way — and that's the best way.* 💪

