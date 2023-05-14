exports.mongoErrorCodes = {
	0: "OK",
	1: "INTERNAL_ERROR",
	2: "BAD_VALUE",
	3: "OBSOLETE_DUPLICATE_KEY",
	4: "No such key",
	5: "GRAPH_CONTAINS_CYCLE",
	6: "HOST_UNREACHABLE",
	7: "HOST_NOT_FOUND",
	8: "UNKNOWN_ERROR",
	9: "FAILED_TO_PARSE",
	10: "CANNOT_MUTATE_OBJECT",
	11: "USER_NOT_FOUND",
	12: "UNSUPPORTED_FORMAT",
	13: "UNAUTHORIZED",
	14: "TYPE_MISMATCH",
	15: "OVERFLOW",
	16: "INVALID_LENGTH",
	17: "PROTOCOL_ERROR",
	18: "AUTHENTICATION_FAILED",
	19: "CANNOT_REUSE_OBJECT",
	20: "ILLEGAL_OPERATION",
	21: "EMPTY_ARRAY_OPERATION",
	22: "INVALID_B_S_O_N",
	23: "ALREADY_INITIALIZED",
	24: "LOCK_TIMEOUT",
	25: "REMOTE_VALIDATION_ERROR",
	26: "NAMESPACE_NOT_FOUND",
	27: "INDEX_NOT_FOUND",
	28: "PATH_NOT_VIABLE",
	29: "NON_EXISTENT_PATH",
	30: "INVALID_PATH",
	31: "ROLE_NOT_FOUND",
	32: "ROLES_NOT_RELATED",
	33: "PRIVILEGE_NOT_FOUND",
	34: "CANNOT_BACKFILL_ARRAY",
	35: "USER_MODIFICATION_FAILED",
	36: "REMOTE_CHANGE_DETECTED",
	37: "FILE_RENAME_FAILED",
	38: "FILE_NOT_OPEN",
	39: "FILE_STREAM_FAILED",
	40: "CONFLICTING_UPDATE_OPERATORS",
	41: "FILE_ALREADY_OPEN",
	42: "LOG_WRITE_FAILED",
	43: "CURSOR_NOT_FOUND",
	45: "USER_DATA_INCONSISTENT",
	46: "LOCK_BUSY",
	47: "NO_MATCHING_DOCUMENT",
	48: "NAMESPACE_EXISTS",
	49: "INVALID_ROLE_MODIFICATION",
	50: "MAX_TIME_MS_EXPIRED",
	51: "MANUAL_INTERVENTION_REQUIRED",
	52: "DOLLAR_PREFIXED_FIELD_NAME",
	53: "INVALID_ID_FIELD",
	54: "NOT_SINGLE_VALUE_FIELD",
	55: "INVALID_D_B_REF",
	56: "EMPTY_FIELD_NAME",
	57: "DOTTED_FIELD_NAME",
	58: "ROLE_MODIFICATION_FAILED",
	59: "COMMAND_NOT_FOUND",
	60: "OBSOLETE_DATABASE_NOT_FOUND",
	61: "SHARD_KEY_NOT_FOUND",
	62: "OPLOG_OPERATION_UNSUPPORTED",
	63: "STALE_SHARD_VERSION",
	64: "WRITE_CONCERN_FAILED",
	65: "MULTIPLE_ERRORS_OCCURRED",
	66: "IMMUTABLE_FIELD",
	67: "CANNOT_CREATE_INDEX",
	68: "INDEX_ALREADY_EXISTS",
	69: "AUTH_SCHEMA_INCOMPATIBLE",
	70: "SHARD_NOT_FOUND",
	71: "REPLICA_SET_NOT_FOUND",
	72: "INVALID_OPTIONS",
	73: "INVALID_NAMESPACE",
	74: "NODE_NOT_FOUND",
	75: "WRITE_CONCERN_LEGACY_O_K",
	76: "NO_REPLICATION_ENABLED",
	77: "OPERATION_INCOMPLETE",
	78: "COMMAND_RESULT_SCHEMA_VIOLATION",
	79: "UNKNOWN_REPL_WRITE_CONCERN",
	80: "ROLE_DATA_INCONSISTENT",
	81: "NO_MATCH_PARSE_CONTEXT",
	82: "NO_PROGRESS_MADE",
	83: "REMOTE_RESULTS_UNAVAILABLE",
	84: "DUPLICATE_KEY_VALUE",
	85: "INDEX_OPTIONS_CONFLICT",
	86: "INDEX_KEY_SPECS_CONFLICT",
	87: "CANNOT_SPLIT",
	88: "SPLIT_FAILED_OBSOLETE",
	89: "NETWORK_TIMEOUT",
	90: "CALLBACK_CANCELED",
	91: "SHUTDOWN_IN_PROGRESS",
	92: "SECONDARY_AHEAD_OF_PRIMARY",
	93: "INVALID_REPLICA_SET_CONFIG",
	94: "NOT_YET_INITIALIZED",
	95: "NOT_SECONDARY",
	96: "OPERATION_FAILED",
	97: "NO_PROJECTION_FOUND",
	98: "DB_PATH_IN_USE",
	100: "UNSATISFIABLE_WRITE_CONCERN",
	101: "OUTDATED_CLIENT",
	102: "INCOMPATIBLE_AUDIT_METADATA",
	103: "NEW_REPLICA_SET_CONFIGURATION_INCOMPATIBLE",
	104: "NODE_NOT_ELECTABLE",
	105: "INCOMPATIBLE_SHARDING_METADATA",
	106: "DISTRIBUTED_CLOCK_SKEWED",
	107: "LOCK_FAILED",
	108: "INCONSISTENT_REPLICA_SET_NAMES",
	109: "CONFIGURATION_IN_PROGRESS",
	110: "CANNOT_INITIALIZE_NODE_WITH_DATA",
	111: "NOT_EXACT_VALUE_FIELD",
	112: "WRITE_CONFLICT",
	113: "INITIAL_SYNC_FAILURE",
	114: "INITIAL_SYNC_OPLOG_SOURCE_MISSING",
	115: "COMMAND_NOT_SUPPORTED",
	116: "DOC_TOO_LARGE_FOR_CAPPED",
	117: "CONFLICTING_OPERATION_IN_PROGRESS",
	118: "NAMESPACE_NOT_SHARDED",
	119: "INVALID_SYNC_SOURCE",
	120: "OPLOG_START_MISSING",
	121: "DOCUMENT_VALIDATION_FAILURE",
	122: "OBSOLETE_READ_AFTER_OPTIME_TIMEOUT",
	123: "NOT_A_REPLICA_SET",
	124: "INCOMPATIBLE_ELECTION_PROTOCOL",
	125: "COMMAND_FAILED",
	126: "RPC_PROTOCOL_NEGOTIATION_FAILED",
	127: "UNRECOVERABLE_ROLLBACK_ERROR",
	128: "LOCK_NOT_FOUND",
	129: "LOCK_STATE_CHANGE_FAILED",
	130: "SYMBOL_NOT_FOUND",
	132: "OBSOLETE_CONFIG_SERVERS_INCONSISTENT",
	133: "FAILED_TO_SATISFY_READ_PREFERENCE",
	134: "READ_CONCERN_MAJORITY_NOT_AVAILABLE_YET",
	135: "STALE_TERM",
	136: "CAPPED_POSITION_LOST",
	137: "INCOMPATIBLE_SHARDING_CONFIG_VERSION",
	138: "REMOTE_OPLOG_STALE",
	139: "JS_INTERPRETER_FAILURE",
	140: "INVALID_SSL_CONFIGURATION",
	141: "SSL_HANDSHAKE_FAILED",
	142: "JS_UNCATCHABLE_ERROR",
	143: "CURSOR_IN_USE",
	144: "INCOMPATIBLE_CATALOG_MANAGER",
	145: "POOLED_CONNECTIONS_DROPPED",
	146: "EXCEEDED_MEMORY_LIMIT",
	147: "Z_LIB_ERROR",
	148: "READ_CONCERN_MAJORITY_NOT_ENABLED",
	149: "NO_CONFIG_MASTER",
	150: "STALE_EPOCH",
	151: "OPERATION_CANNOT_BE_BATCHED",
	152: "OPLOG_OUT_OF_ORDER",
	153: "CHUNK_TOO_BIG",
	154: "INCONSISTENT_SHARD_IDENTITY",
	155: "CANNOT_APPLY_OPLOG_WHILE_PRIMARY",
	156: "OBSOLETE_NEEDS_DOCUMENT_MOVE",
	157: "CAN_REPAIR_TO_DOWNGRADE",
	158: "MUST_UPGRADE",
	159: "DURATION_OVERFLOW",
	160: "MAX_STALENESS_OUT_OF_RANGE",
	161: "INCOMPATIBLE_COLLATION_VERSION",
	162: "COLLECTION_IS_EMPTY",
	163: "ZONE_STILL_IN_USE",
	164: "INITIAL_SYNC_ACTIVE",
	165: "VIEW_DEPTH_LIMIT_EXCEEDED",
	166: "COMMAND_NOT_SUPPORTED_ON_VIEW",
	167: "OPTION_NOT_SUPPORTED_ON_VIEW",
	168: "INVALID_PIPELINE_OPERATOR",
	169: "COMMAND_ON_SHARDED_VIEW_NOT_SUPPORTED_ON_MONGOD",
	170: "TOO_MANY_MATCHING_DOCUMENTS",
	171: "CANNOT_INDEX_PARALLEL_ARRAYS",
	172: "TRANSPORT_SESSION_CLOSED",
	173: "TRANSPORT_SESSION_NOT_FOUND",
	174: "TRANSPORT_SESSION_UNKNOWN",
	175: "QUERY_PLAN_KILLED",
	176: "FILE_OPEN_FAILED",
	177: "ZONE_NOT_FOUND",
	178: "RANGE_OVERLAP_CONFLICT",
	179: "WINDOWS_PDH_ERROR",
	180: "BAD_PERF_COUNTER_PATH",
	181: "AMBIGUOUS_INDEX_KEY_PATTERN",
	182: "INVALID_VIEW_DEFINITION",
	183: "CLIENT_METADATA_MISSING_FIELD",
	184: "CLIENT_METADATA_APP_NAME_TOO_LARGE",
	185: "CLIENT_METADATA_DOCUMENT_TOO_LARGE",
	186: "CLIENT_METADATA_CANNOT_BE_MUTATED",
	187: "LINEARIZABLE_READ_CONCERN_ERROR",
	188: "INCOMPATIBLE_SERVER_VERSION",
	189: "PRIMARY_STEPPED_DOWN",
	190: "MASTER_SLAVE_CONNECTION_FAILURE",
	191: "OBSOLETE_BALANCER_LOST_DISTRIBUTED_LOCK",
	192: "FAIL_POINT_ENABLED",
	193: "NO_SHARDING_ENABLED",
	194: "BALANCER_INTERRUPTED",
	195: "VIEW_PIPELINE_MAX_SIZE_EXCEEDED",
	197: "INVALID_INDEX_SPECIFICATION_OPTION",
	198: "OBSOLETE_RECEIVED_OP_REPLY_MESSAGE",
	199: "REPLICA_SET_MONITOR_REMOVED",
	200: "CHUNK_RANGE_CLEANUP_PENDING",
	201: "CANNOT_BUILD_INDEX_KEYS",
	202: "NETWORK_INTERFACE_EXCEEDED_TIME_LIMIT",
	203: "SHARDING_STATE_NOT_INITIALIZED",
	204: "TIME_PROOF_MISMATCH",
	205: "CLUSTER_TIME_FAILS_RATE_LIMITER",
	206: "NO_SUCH_SESSION",
	207: "INVALID_UUID",
	208: "TOO_MANY_LOCKS",
	209: "STALE_CLUSTER_TIME",
	210: "CANNOT_VERIFY_AND_SIGN_LOGICAL_TIME",
	211: "KEY_NOT_FOUND",
	212: "INCOMPATIBLE_ROLLBACK_ALGORITHM",
	213: "DUPLICATE_SESSION",
	214: "AUTHENTICATION_RESTRICTION_UNMET",
	215: "DATABASE_DROP_PENDING",
	216: "ELECTION_IN_PROGRESS",
	217: "INCOMPLETE_TRANSACTION_HISTORY",
	218: "UPDATE_OPERATION_FAILED",
	219: "FTDC_PATH_NOT_SET",
	220: "FTDC_PATH_ALREADY_SET",
	221: "INDEX_MODIFIED",
	222: "CLOSE_CHANGE_STREAM",
	223: "ILLEGAL_OP_MSG_FLAG",
	224: "QUERY_FEATURE_NOT_ALLOWED",
	225: "TRANSACTION_TOO_OLD",
	226: "ATOMICITY_FAILURE",
	227: "CANNOT_IMPLICITLY_CREATE_COLLECTION",
	228: "SESSION_TRANSFER_INCOMPLETE",
	229: "MUST_DOWNGRADE",
	230: "D_N_S_HOST_NOT_FOUND",
	231: "D_N_S_PROTOCOL_ERROR",
	232: "MAX_SUB_PIPELINE_DEPTH_EXCEEDED",
	233: "TOO_MANY_DOCUMENT_SEQUENCES",
	234: "RETRY_CHANGE_STREAM",
	235: "INTERNAL_ERROR_NOT_SUPPORTED",
	236: "FOR_TESTING_ERROR_EXTRA_INFO",
	237: "CURSOR_KILLED",
	238: "NOT_IMPLEMENTED",
	239: "SNAPSHOT_TOO_OLD",
	240: "DNS_RECORD_TYPE_MISMATCH",
	241: "CONVERSION_FAILURE",
	242: "CANNOT_CREATE_COLLECTION",
	243: "INCOMPATIBLE_WITH_UPGRADED_SERVER",
	244: "NOT_YET_AVAILABLE_TRANSACTION_ABORTED",
	245: "BROKEN_PROMISE",
	246: "SNAPSHOT_UNAVAILABLE",
	247: "PRODUCER_CONSUMER_QUEUE_BATCH_TOO_LARGE",
	248: "PRODUCER_CONSUMER_QUEUE_END_CLOSED",
	249: "STALE_DB_VERSION",
	250: "STALE_CHUNK_HISTORY",
	251: "NO_SUCH_TRANSACTION",
	252: "REENTRANCY_NOT_ALLOWED",
	253: "FREE_MON_HTTP_IN_FLIGHT",
	254: "FREE_MON_HTTP_TEMPORARY_FAILURE",
	255: "FREE_MON_HTTP_PERMANENT_FAILURE",
	256: "TRANSACTION_COMMITTED",
	257: "TRANSACTION_TOO_LARGE",
	258: "UNKNOWN_FEATURE_COMPATIBILITY_VERSION",
	259: "KEYED_EXECUTOR_RETRY",
	260: "INVALID_RESUME_TOKEN",
	261: "TOO_MANY_LOGICAL_SESSIONS",
	262: "EXCEEDED_TIME_LIMIT",
	263: "OPERATION_NOT_SUPPORTED_IN_TRANSACTION",
	264: "TOO_MANY_FILES_OPEN",
	265: "ORPHANED_RANGE_CLEAN_UP_FAILED",
	266: "FAIL_POINT_SET_FAILED",
	267: "PREPARED_TRANSACTION_IN_PROGRESS",
	268: "CANNOT_BACKUP",
	269: "DATA_MODIFIED_BY_REPAIR",
	270: "REPAIRED_REPLICA_SET_NODE",
	271: "JS_INTERPRETER_FAILURE_WITH_STACK",
	9001: "SOCKET_EXCEPTION",
	9996: "OBSOLETE_RECV_STALE_CONFIG",
	10107: "NOT_MASTER",
	10003: "CANNOT_GROW_DOCUMENT_IN_CAPPED_NAMESPACE",
	10334: "BSON_OBJECT_TOO_LARGE",
	11000: "Already exist",
	11600: "INTERRUPTED_AT_SHUTDOWN",
	11601: "INTERRUPTED",
	11602: "INTERRUPTED_DUE_TO_STEP_DOWN",
	14031: "OUT_OF_DISK_SPACE",
	17280: "KEY_TOO_LONG",
	12586: "BACKGROUND_OPERATION_IN_PROGRESS_FOR_DATABASE",
	12587: "BACKGROUND_OPERATION_IN_PROGRESS_FOR_NAMESPACE",
	13436: "NOT_MASTER_OR_SECONDARY",
	13435: "NOT_MASTER_NO_SLAVE_OK",
	13334: "SHARD_KEY_TOO_BIG",
	13388: "STALE_CONFIG",
	13297: "DATABASE_DIFFER_CASE",
	13104: "OBSOLETE_PREPARE_CONFIGS_FAILED",
};
