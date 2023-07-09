import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';

// import { vibrate } from './utils';

const INITIAL_WORK_MIN = '25';
const INITIAL_BREAK_MIN = '05';
const INITIAL_SEC = '00';
const WORK_LABEL = 'Work';
const BREAK_LABEL = 'Break';
const START_LABEL = 'Start';
const STOP_LABEL = 'Stop';

let interval = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: INITIAL_WORK_MIN,
      seconds: INITIAL_SEC,
      session: WORK_LABEL,
      buttonLabel: START_LABEL,
      workInputValue: INITIAL_WORK_MIN,
      breakInputValue: INITIAL_BREAK_MIN,
    };

    this.secondsRemaining;
    this.isRunning = false;
  }

  startStopTimer = workSession => {
    // Stop/pause timer
    if (this.isRunning) {
      return this.pauseTimer();
    }

    // Start/Continue timer
    this.setState(previousState => ({
      buttonLabel: STOP_LABEL,
    }));

    if (!this.secondsRemaining) {
      this.secondsRemaining = (this.state.minutes
        ? this.state.minutes * 60
        : INITIAL_WORK_MIN * 60);
    }

    this.isRunning = true;

    this.setupInteval();
  };

  setupInteval = () => {
    clearInterval(interval);

    interval = setInterval(() => this.onTick(), 1000);
  };

  onTick = () => {
    let minutes = Math.floor(this.secondsRemaining / 60);
    let seconds = this.secondsRemaining - minutes * 60;

    minutes = this.normalizeDigits(minutes);
    seconds = this.normalizeDigits(seconds);

    this.setState(previousState => ({
      minutes: minutes,
      seconds: seconds,
    }));

    this.secondsRemaining--;

    if (minutes == 0 && seconds == 0) {
      
      vibrate();
      
      if (this.state.session == WORK_LABEL) {
        this.startBreak();
      } else {
        this.startWork();
      }
    }
  };

  pauseTimer = () => {
    clearInterval(interval);

    this.isRunning = false;

    this.setState(previousState => ({
      buttonLabel: START_LABEL,
    }));
  };

  startWork = () => {
    const that = this;

    this.setState(previousState => ({
      minutes: that.normalizeDigits(this.state.workInputValue),
      seconds: INITIAL_SEC,
      session: WORK_LABEL,
      buttonLabel: STOP_LABEL,
    }));

    this.secondsRemaining = this.state.workInputValue * 60;

    this.setupInteval();
  };

  startBreak = () => {
    const that = this;

    this.setState(previousState => ({
      minutes: that.normalizeDigits(this.state.breakInputValue),
      seconds: INITIAL_SEC,
      session: BREAK_LABEL,
      buttonLabel: STOP_LABEL,
    }));

    this.secondsRemaining = this.state.breakInputValue * 60;

    this.setupInteval();
  };

  resetTimer = () => {
    const that = this;

    this.isRunning = false;
    this.secondsRemaining = 0;

    clearInterval(interval);

    this.setState(previousState => ({
      session: WORK_LABEL,
      buttonLabel: START_LABEL,
      seconds: INITIAL_SEC,
      minutes: that.normalizeDigits(previousState.workInputValue),
    }));
  };

  onWorkInputChange = workMin => {
    const that = this;

    this.setState(previousState => ({
      workInputValue: workMin,
      minutes: that.normalizeDigits(workMin),
    }));

    this.resetTimer();
  };

  onBreakInputChange = breakMin => {
    const that = this;

    this.setState(previousState => ({
      breakInputValue: breakMin,
      minutes: that.normalizeDigits(this.state.workInputValue),
    }));

    this.resetTimer();
  };

  normalizeDigits = value => {
    if (value.toString().length < 2) {
      return '0' + value;
    }

    return value;
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.session}>{this.state.session}</Text>
          <Text style={styles.timer}>
            {this.state.minutes}:{this.state.seconds}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Work Mins:</Text>
          <TextInput
            defaultValue={`${this.state.workInputValue}`}
            maxLength={3}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.onWorkInputChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Break Mins:</Text>
          <TextInput
            defaultValue={`${this.state.breakInputValue}`}
            maxLength={3}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.onBreakInputChange}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.startStopBtn}
            onPress={() => this.startStopTimer()}>
            <Text style={styles.startStopBtnText}>
              {this.state.buttonLabel}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => this.resetTimer()}>
            <Text style={styles.resetBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight,
    paddingTop: 20,
  },
  session: {
    fontSize: 35,
    textAlign: 'center',
    color: '#4A5568',
  },
  timer: {
    fontSize: 90,
    color: '#667EEA',
    padding: 10,
  },
  startStopBtn: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#718096',
    borderRadius: 10,
  },
  resetBtn: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#718096',
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  startStopBtnText: {
    color: '#48BB78',
    fontSize: 25,
  },
  resetBtnText: {
    color: '#F56565',
    fontSize: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 18,
    color: '#4A5568',
    paddingRight: 10,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  input: {
    color: '#667EEA',
    borderWidth: 1,
    borderColor: '#4A5568',
    borderRadius: 10,
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
    marginLeft: 5,
    maxWidth: 60,
    minWidth: 40
  },
});
