// Web Audio API Synthesizer for sweet celebratory sounds (zero external audio files needed)

class SoundEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // Audio might be blocked before first interaction
    }
  }

  playLoveChime() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const now = this.ctx.currentTime;
      
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
        
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch {
      // Audio context catch
    }
  }

  playLevelUp() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
      const now = this.ctx.currentTime;
      
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        
        gain.gain.setValueAtTime(0.15, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.35);
        
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.35);
      });
    } catch {
      // Audio context catch
    }
  }

  playFireworksBurst() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 1. Whoosh / Lift
      const whooshOsc = this.ctx.createOscillator();
      const whooshGain = this.ctx.createGain();
      whooshOsc.type = 'sine';
      whooshOsc.frequency.setValueAtTime(220, now);
      whooshOsc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
      whooshGain.gain.setValueAtTime(0.1, now);
      whooshGain.gain.linearRampToValueAtTime(0.001, now + 0.25);
      whooshOsc.connect(whooshGain);
      whooshGain.connect(this.ctx.destination);
      whooshOsc.start(now);
      whooshOsc.stop(now + 0.25);

      // 2. Boom (Low frequency rumble)
      const boomOsc = this.ctx.createOscillator();
      const boomGain = this.ctx.createGain();
      boomOsc.type = 'triangle';
      boomOsc.frequency.setValueAtTime(140, now + 0.2);
      boomOsc.frequency.exponentialRampToValueAtTime(40, now + 0.7);
      boomGain.gain.setValueAtTime(0.3, now + 0.2);
      boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      boomOsc.connect(boomGain);
      boomGain.connect(this.ctx.destination);
      boomOsc.start(now + 0.2);
      boomOsc.stop(now + 0.7);

      // 3. Shimmer Chime
      const notes = [659.25, 783.99, 987.77, 1318.51];
      notes.forEach((freq, i) => {
        const chime = this.ctx!.createOscillator();
        const cGain = this.ctx!.createGain();
        chime.type = 'sine';
        chime.frequency.setValueAtTime(freq, now + 0.25 + i * 0.06);
        cGain.gain.setValueAtTime(0.12, now + 0.25 + i * 0.06);
        cGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7 + i * 0.06);
        chime.connect(cGain);
        cGain.connect(this.ctx!.destination);
        chime.start(now + 0.25 + i * 0.06);
        chime.stop(now + 0.8 + i * 0.06);
      });
    } catch {
      // Audio context catch
    }
  }

  playHappyBirthdayTune() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      // "Happy Birthday To You" motif: C4 C4 D4 C4 F4 E4
      const notes = [
        { f: 261.63, d: 0.25 },
        { f: 261.63, d: 0.25 },
        { f: 293.66, d: 0.5 },
        { f: 261.63, d: 0.5 },
        { f: 349.23, d: 0.5 },
        { f: 329.63, d: 0.9 },
      ];
      let t = this.ctx.currentTime;
      notes.forEach((note) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, t);
        gain.gain.setValueAtTime(0.16, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(t);
        osc.stop(t + note.d);
        t += note.d + 0.05;
      });
    } catch {
      // Audio context catch
    }
  }
}

export const sound = new SoundEngine();
