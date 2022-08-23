import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD_MISSIONS = 'spacetravellers/missions/missions';
const JOIN_MISSIONS = 'spacetravellers/missions/joinMissions';
const LEAVE_MISSIONS = 'spacetravellers/missions/leaveMissions';
const POPULATE_MISSIONS_PROFILE = 'spacetravellers/mission/populateMissionsProfile';
